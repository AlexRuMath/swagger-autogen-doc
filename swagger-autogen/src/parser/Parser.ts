import * as fs from 'fs'
import Rout from './classes/Elements/Rout.js';
import Url from "./classes/Elements/Url.js";
import Comment from "./classes/Elements/Comment.js";
import Composite from "./classes/Composite.js";

export default class Parser
{
    readonly _regexRouter: RegExp;

    constructor()
    {
        this._regexRouter = /\.(get|post|delete|put)\('(\/.*)*'/g;
    }


    parse(dir: string) : Map<string, Composite[]>
    {
        let res = new Map<string, Composite[]>();
        let components = this.readAllFilesFromFolder(dir);

        for(let i = 0; i < components.length; i++)
        {
            let component = components[i];

            let rout = component.element;
            let path = rout.url.path;

            if(!res[path])
            {
                res.set(path, [])
            }

            res.get(path).push(component);
        }

        return res;
    }


    private readAllFilesFromFolder(dir: string) : Composite[]
    {
        let results = [];
        let files = fs.readdirSync(dir);

        for(let i = 0; i < files.length; i++){
            let file = files[i];

            file = dir + '/' + file;
            let stat = fs.statSync(file);

            if(stat && stat.isDirectory())
            {
                results = results.concat(this.readAllFilesFromFolder(file))
            } else {
                let text = fs.readFileSync(file, 'utf-8');
                let comments = this.getComments(text);
                let routs = this.getRouts(text);

                if(routs.length !== 0)
                {
                    let components = this.getComposite(routs, comments);
                    results = results.concat(components);
                }
            }
        }

        return results
    }

    private getRouts(text): Rout[]
    {
        let router = text.matchAll(this._regexRouter);
        let res = [];

        if(router.length !== 0)
        {
            for(let match of router)
            {
                let method = match[1];
                let url = new Url(match[2]);
                res.push(new Rout(method, url, match.index));
            }
        }

        return res;
    }

    private getComments(text) : Comment[]
    {
        let commentStartAll = [...text.matchAll(/<swagger>/g)];
        let commentEndAll = [...text.matchAll(/<\/swagger>/g)];

        let res = [];
        if(commentStartAll.length !== 0 && commentEndAll.length !== 0){
            for(let i = 0; i < commentStartAll.length; i++)
            {
                let startIndex = commentStartAll[i].index + commentStartAll[i][0].length;
                let endIndex = commentEndAll[i].index;
                let diff = endIndex - startIndex;

                let comment = new Comment(text.substr(startIndex, diff), startIndex, endIndex);

                res.push(comment);
            }
        }
        return res;
    }


    private getComposite(element, comments) : Composite[]
    {
        let res = [];
        let abs = Math.abs;

        for(let i = 0; i < element.length; i++)
        {
            let index_min = 0;
            for(let j = 1; j < comments.length; j++)
            {
                let min = abs(comments[index_min].endIndex - element[i].index);
                let cur_min = abs(comments[j].endIndex - element[i].index);
                if(cur_min < min)
                {
                    index_min = j;
                    min = cur_min;
                }
            }

            let swaggerElement = new Composite(element[i], comments[index_min]);
            res.push(swaggerElement);
        }

        return res;
    }
}


var parser = new Parser();
let res_1 = parser.parse('/home/alex/Project/NodeJs/swagger-autogen-doc/Express');
let res_2 = parser.parse('/home/alex/Project/NodeJs/poker-game-instance/');

console.log(res_1.get('/index'));
