import * as fs from 'fs';
import Rout from './classes/Elements/Rout.js';
import Url from "./classes/Elements/Url.js";
import Comment from "./classes/Elements/Comment.js";
export default class Parser {
    constructor() {
        this._regexRouter = /\.(get|post|delete|put)\('(\/.*)*'/g;
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
                let routs = this.getRouts(text);
                if (routs.length !== 0) {
                    let components = this.concatCommentAndRout(routs, comments);
                    results = results.concat(components);
                }
            }
        }
        return results;
    }
    getRouts(text) {
        let router = text.matchAll(this._regexRouter);
        let res = [];
        if (router.length !== 0) {
            for (let match of router) {
                let method = match[1];
                let url = new Url(match[2]);
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
var parser = new Parser();
let res_1 = parser.parse('/home/alex/Project/NodeJs/swagger-autogen-doc/Express');
let res_2 = parser.parse('/home/alex/Project/NodeJs/poker-game-instance/');
let a = res_1.get('/index');
//console.log(res_1);
//# sourceMappingURL=Parser.js.map