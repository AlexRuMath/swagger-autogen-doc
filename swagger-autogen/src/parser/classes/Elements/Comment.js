import SwaggerLexer from "../../grammar/swagger-gen/SwaggerLexer.js";
import SwaggerParser from "../../grammar/swagger-gen/SwaggerParser.js";
import CommentsVisitor from "../../visitors/CommentsVisitor.js";
import * as antlr4 from "antlr4";
export default class Comment {
    constructor(data, startIndex, endIndex) {
        this.data = data;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.tags = new Map();
        this.getSwaggerElementsFromData();
    }
    getSwaggerElementsFromData() {
        let inputStream = new antlr4.InputStream(this.data);
        let lexer = new SwaggerLexer(inputStream);
        let token = new antlr4.CommonTokenStream(lexer);
        let parser = new SwaggerParser(token);
        let tree = parser.swaggerDocument();
        let visitor = new CommentsVisitor();
        visitor.visitSwaggerDocument(tree);
        for (let tag in visitor.tags) {
            if (!this.tags.get(tag)) {
                this.tags.set(tag, []);
            }
            this.tags.get(tag).push(visitor.tags[tag]);
        }
    }
}
//# sourceMappingURL=Comment.js.map