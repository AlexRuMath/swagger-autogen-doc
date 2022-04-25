import Parser from "../parser/Parser.js";
import OperationObjectBuilder from "./swagger-classes/Paths/OperationObjectBuilder.js";
import Rout from "../parser/classes/Elements/Rout.js";
import OperationObject from "./swagger-classes/Paths/OperationObject.js";
import NodeTree from "../Tree/NodeTree.js";

var parser = new Parser();
let dir_1 = '/home/alex/Project/NodeJs/swagger-autogen-doc/Express';
let dir_poker = '/home/alex/Project/NodeJs/poker-game-instance/';
let res = parser.parse(dir_1);

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

    writePaths(mapRoutes: Map<string, Rout[]>)
    {
        this.document['paths'] = {};
        let operationObjectBuilder = new OperationObjectBuilder();

        mapRoutes.forEach((routes: Rout[], path: string) => {
            routes.forEach((rout: Rout) => {
                operationObjectBuilder.setMethod(rout.method);

                if(rout.comment)
                {
                    let comment = rout.comment;
                    operationObjectBuilder.setSummary(comment.tags.get("summary"));

                }
            });

            this.document['paths'][path] = operationObjectBuilder.getItem();
        });
    }
}

let builder = new BuilderDocuments();

builder.writePaths(res);

let doc = builder.getItem();

console.log(doc);

