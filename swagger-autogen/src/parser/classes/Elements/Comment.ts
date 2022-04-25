import SwaggerLexer from "../../grammar/swagger-gen/SwaggerLexer.js";
import SwaggerParser from "../../grammar/swagger-gen/SwaggerParser.js";
import CommentsVisitor from "../../visitors/CommentsVisitor.js";
import BaseTag from "../Tags/BaseTag.js";
import * as antlr4 from "antlr4";

export default class Comment{
    tags: Map<string, BaseTag[]>;
    data: string;
    startIndex: number;
    endIndex: number;

    constructor(data: string, startIndex: number, endIndex: number) {
        this.data = data;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.tags = new Map<string, BaseTag[]>();

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

        for(let tag in visitor.tags)
        {
            if(!this.tags.get(tag))
            {
                this.tags.set(tag, [])
            }

            this.tags.get(tag).push(visitor.tags[tag])
        }
    }
}