const fs = require('fs');
const path = require("path");
const Rout = require('./classes/Elements/Rout.js');
const Url = require('./classes/Elements/Url.js');
const j2s = require("joi-to-swagger");
const ApiRepository = require("../repositories/api-repositories");
const SchemaRepository = require("../repositories/schem-repositories");
const findRouts = require("./utils/find-rout");

class Parser {
    constructor(options) {
        this.options = options;
        this._regexRouter = /\.(get|post|delete|put)\('(\/.*)*'/g;
        this._regexMethod = /\s*method\s*:\s*('get'|'post'|'delete'|'patch')/;
        this._regexUrl = /\s*path\s*:\s*('|")(\/.*)*('|")/;
        this._regexScheme = /validationSchema\s*:\s*/;
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

        if (curDir.match('node_modules')) return results;

        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            file = dir + '/' + file;
            let stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(this.readAllFilesFromFolder(file));
            } else {
                if (!file.match(/.js/) || file.match(/.json/)) continue;

                let text = fs.readFileSync(file, 'utf-8');
                let routs = findRouts(text, file, this.options);

                if (routs.length === 0) continue;
                results = results.concat(routs);
            }
        }
        return results;
    }

    getRouts(text, file) {
        let startPos = 0;
        let res = [];

        for (let i = 0; i < text.length; i++) {
            let subTxt = text.slice(startPos, i);
            let findMethod = this._regexMethod.exec(subTxt);
            let findPath = this._regexUrl.exec(subTxt);

            if (!findMethod && !findPath) continue;

            let schemaApi = ApiRepository.getByPath(findPath[2]);
            let method = schemaApi ? schemaApi.api.method : findMethod[1].split("'")[1];
            let endpoint = schemaApi ? schemaApi.api.path : findPath[2];
            let filename = file.split('/').pop().replace('.js', '');

            if (schemaApi) {
                if (schemaApi.api.validationSchema) {
                    const swagger_schema = j2s(schemaApi.api.validationSchema).swagger;
                    SchemaRepository.add({
                        in: method === 'get' ? 'query' : 'body',
                        filename: filename,
                        schema: swagger_schema
                    })
                }
            } else {
                console.warn(`WARNING: The api in ${file} dont mark as swagger api`);
            }

            let url = new Url(endpoint, this.options);
            let rout = new Rout(method, url, findMethod.index, filename);
            let comment = findComments(subTxt, file);

            if (comment.length !== 0)
                rout.setComment(comment[0]);

            res.push(rout);
            startPos = findPath.index + findPath[2].length;
        }

        return res;
    }
}

module.exports = Parser;