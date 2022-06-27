const SwaggerLexer = require("../../grammar/swagger-gen/SwaggerLexer.js");
const SwaggerParser = require("../../grammar/swagger-gen/SwaggerParser.js");
const CommentsVisitor = require("../../visitors/CommentsVisitor.js");
const antlr4 = require("antlr4");

module.exports = class Comment {
    constructor(data, startIndex, endIndex) {
        this.data = data;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
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

        this.tags = visitor.tags;
    }
}