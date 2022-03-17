import Composite from "../parser/classes/Composite.js";
import Parser from "../parser/Parser.js";
import Paths from "./swagger-classes/Paths/Paths.js";
import PathItemBuilder from "./swagger-classes/Paths/PathItemBuilder.js";
import Responses from "./swagger-classes/Responses/Responses";
import ResponseTag from "../parser/classes/Tags/ResponseTag";
import {ResponseItem} from "./swagger-classes/Responses/ResponseItem";
import Tag from "../parser/interfaces/Tag";
import ParametersBody from "./swagger-classes/Parameters/ParametersBody";

var parser = new Parser();
let res = parser.parse('/home/alex/Project/NodeJs/swagger-autogen-doc/Express');

export default class BuilderDocuments
{
    document: object;

    constructor()
    {
        this.reset();
    }

    getItem()
    {
        let result = this.document;
        this.reset();

        return result;
    }

    reset()
    {
        this.document = {}
    }

    writePaths(routs: Map<string, Composite[]>)
    {
        routs.forEach((compositeArray: Composite[], path: string) =>
        {
            let pathItemBuilder = new PathItemBuilder();
            let paths = new Paths();

            for(let i = 0; i < compositeArray.length; i++)
            {
                let composite = compositeArray[i];

                if(composite.comment)
                {
                    let comment = composite.comment;

                    console.log(comment.tags['summary']);
                }
            }
        })
    }

}

let builder = new BuilderDocuments();

builder.writePaths(res);
