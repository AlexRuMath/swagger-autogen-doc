import Parser from "../parser/Parser.js";
import OperationObjectBuilder from "./swagger-classes/Paths/OperationObjectBuilder.js";
var parser = new Parser();
let dir_1 = '/home/alex/Project/NodeJs/swagger-autogen-doc/Express';
let dir_poker = '/home/alex/Project/NodeJs/poker-game-instance/';
let res = parser.parse(dir_1);
export default class BuilderDocuments {
    constructor() {
        this.reset();
    }
    getItem() {
        let result = this.document;
        this.reset();
        return result;
    }
    reset() {
        this.document = {};
    }
    writePaths(mapRoutes) {
        this.document['paths'] = {};
        let operationObjectBuilder = new OperationObjectBuilder();
        mapRoutes.forEach((routes, path) => {
            routes.forEach((rout) => {
                operationObjectBuilder.setMethod(rout.method);
                if (rout.comment) {
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
//# sourceMappingURL=BuilderDocuments.js.map