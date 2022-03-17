import Parser from "../parser/Parser.js";
import Paths from "./swagger-classes/Paths/Paths.js";
import PathItemBuilder from "./swagger-classes/Paths/PathItemBuilder.js";
var parser = new Parser();
let res = parser.parse('/home/alex/Project/NodeJs/swagger-autogen-doc/Express');
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
    writePaths(routs) {
        routs.forEach((compositeArray, path) => {
            let pathItemBuilder = new PathItemBuilder();
            let paths = new Paths();
            for (let i = 0; i < compositeArray.length; i++) {
                let composite = compositeArray[i];
                if (composite.comment) {
                    let comment = composite.comment;
                    console.log(comment.tags['summary']);
                }
            }
        });
    }
}
let builder = new BuilderDocuments();
builder.writePaths(res);
//# sourceMappingURL=BuilderDocuments.js.map