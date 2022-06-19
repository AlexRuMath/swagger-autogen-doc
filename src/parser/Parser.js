const fs = require('fs');
const path = require("path");
const Rout = require('./classes/Elements/Rout.js');
const Url = require('./classes/Elements/Url.js');
const Comment = require("./classes/Elements/Comment.js");
const j2s = require("joi-to-swagger");
const ApiRepository = require("../repositories/api-repositories");
const SchemaRepository = require("../repositories/schem-repositories");
const findComments = require("./find-comments");

class Parser {
    constructor(options) {
        this.options = options;
        this._regexRouter = /(get|post|delete|put)\('(\/.*)*'/g;
        this._regexMethod = /\s*method\s*:\s*('get'|'post'|'delete'|'patch')/;
        this._regexUrl = /\s*path\s*:\s*('|")(\/.*)*('|")/;
        this._regexScheme = /validationSchema\s*:\s*/;
        this.allApi = ApiRepository.getAll();
    }

    parse(dir) {
        let res = new Map();
        let routs = this.readAllFilesFromFolder(dir);
        for (let i = 0; i < routs.length; i++) {
            let rout = routs[i];
            let path = rout.url.path;
            if (!res.get(path)) {
                res.set(path, []);
            }
            res.get(path).push(rout);
        }

        return res;
    }

    readAllFilesFromFolder(dir) {
        let results = [];
        let curDir = dir.split('/').pop();

        if (curDir.match('node_modules') || curDir.match("swagger-autogen")) return results;

        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            file = dir + '/' + file;
            let stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(this.readAllFilesFromFolder(file));
            }
            else {
                if(!file.match(/.js/)) continue;

                let text = fs.readFileSync(file, 'utf-8');
                let routs = this.getRouts(text, file);
                if (routs.length !== 0) {
                    let comments = this.getComments(text, file);
                    let components = this.concatCommentAndRout(routs, comments);
                    results = results.concat(components);
                }
            }
        }
        return results;
    }

    getRouts(text, file) {
        let res = [];

        for (let i = 0; i < this.allApi.length; i++) {
            let findApi = this.allApi[i].pathRegexp.exec(text);
            if (findApi) {
                let api = ApiRepository.getByPath(findApi[0]);
                let method = api.method;
                let endpoint = api.path;
                let filename = file.split('/').pop().replace('.js', '');

                if (api.validationSchema) {
                    const swagger_scheme = j2s(api.validationSchema).swagger;
                    SchemaRepository.add({
                        filename: filename,
                        schema: swagger_scheme
                    })
                }
                let url = new Url(endpoint, this.options);
                res.push(new Rout(method, url, findApi.index, filename));
            }
        }
        return res;
    }

    getComments(text, file) {
        let commentStartAll = [...text.matchAll(/<swagger>/g)];
        let commentEndAll = [...text.matchAll(/<\/swagger>/g)];
        let res = [];

        if (commentStartAll.length !== 0 && commentEndAll.length !== 0) {
            for (let i = 0; i < commentStartAll.length; i++) {
                let startIndex = commentStartAll[i].index + commentStartAll[i][0].length;
                let endIndex = commentEndAll[i].index;
                let diff = endIndex - startIndex;
                let comment = new Comment(text.substr(startIndex, diff), startIndex, endIndex);
                res.push(comment);
            }
        }
        return res;
    }

    concatCommentAndRout(element, comments) {
        let res = [];
        let abs = Math.abs;
        for (let i = 0; i < element.length; i++) {
            let index_min = 0;
            for (let j = 1; j < comments.length; j++) {
                let min = abs(comments[index_min].endIndex - element[i].index);
                let cur_min = abs(comments[j].endIndex - element[i].index);
                if (cur_min < min) {
                    index_min = j;
                    min = cur_min;
                }
            }
            element[i].setComment(comments[index_min]);
            res.push(element[i]);
        }
        return res;
    }
}

module.exports = Parser;