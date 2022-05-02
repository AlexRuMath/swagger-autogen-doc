const fs = require('fs');
const Rout = require('./classes/Elements/Rout.js');
const Url = require('./classes/Elements/Url.js');
const Comment = require("./classes/Elements/Comment.js");
const j2s = require("joi-to-swagger");

class Parser {
    constructor(options) {
        this.options = options;
        this._regexRouter = /\.(get|post|delete|put)\('(\/.*)*'/g;
        this.schemes = {};
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

        return [res, this.schemes];
    }
    readAllFilesFromFolder(dir) {
        let results = [];
        let curDir = dir.split('/').pop();

        if (curDir.match('node_modules')) return results;
        if (curDir.match('swagger')) {
            this.getSchemes(dir);
        }

        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            file = dir + '/' + file;
            let stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(this.readAllFilesFromFolder(file));
            }
            else {
                let text = fs.readFileSync(file, 'utf-8');
                let comments = this.getComments(text);
                let routs = this.getRouts(text, dir);
                if (routs.length !== 0) {
                    let components = this.concatCommentAndRout(routs, comments);
                    results = results.concat(components);
                }
            }
        }
        return results;
    }
    getRouts(text, dir) {
        let router = text.matchAll(this._regexRouter);
        let res = [];
        if (router.length !== 0) {
            for (let match of router) {
                let method = match[1];
                let controller = dir.split('/');
                let url = new Url(match[2].split(',')[0], this.options);
                res.push(new Rout(method, url, match.index));
            }
        }
        return res;
    }
    getComments(text) {
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

    getSchemes(dir) {
        let schemes = fs.readdirSync(dir);
        
        for(let i = 0; i < schemes.length; i++)
        {
            if(schemes[i] === "index.js") continue;

            const scheme = require(dir + "/" + schemes[i]);
            const name_scheme = schemes[i].split('.')[0];
            const swagger_scheme = j2s(scheme).swagger;
            this.schemes[name_scheme] = swagger_scheme;
        }
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