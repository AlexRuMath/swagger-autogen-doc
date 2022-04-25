const SwaggerParserVisitor = require("../grammar/swagger-gen/SwaggerParserVisitor.js");
const TagFabric = require("../classes/TagFabric.js");
// This class defines a complete generic visitor for a parse tree produced by SwaggerParser.

module.exports = class CommentsVisitor extends SwaggerParserVisitor {

	constructor()
	{
		super();
		this.tagFabric = new TagFabric();
		this.tags = {};
	}

	// Visit a parse tree produced by SwaggerParser#swaggerDocument.
	visitSwaggerDocument(ctx) {
        return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SwaggerParser#swaggerElements.
	visitSwaggerElements(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SwaggerParser#swaggerElement.
	visitSwaggerElement(ctx) {
		this.addTag(ctx);
        return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SwaggerParser#swaggerContent.
	visitSwaggerContent(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SwaggerParser#swaggerAttribute.
	visitSwaggerAttribute(ctx) {
        return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by SwaggerParser#swaggerChardata.
	visitSwaggerChardata(ctx) {
	  return this.visitChildren(ctx);
	}

	addTag(ctx)
	{
        let tag = ctx.getChild(1).getText();
        let content = ctx.swaggerContent().getText();
        let createTag = {};

        if (tag === 'summary') {
            createTag = this.tagFabric.createSummaryTag(content);
        }

        if (tag === 'response') {
            let parameters = ctx.swaggerAttribute();
            createTag = this.tagFabric.createResponseTag(content, parameters);
        }

        if (tag === 'param') {
            let parameters = ctx.swaggerAttribute();
            createTag = this.tagFabric.createParamTag(content, parameters);
        }

        if (tag === 'remarks') {
            createTag = this.tagFabric.createRemarksTag(content);
        }

        if (tag === 'body') {
        	let parameters = ctx.swaggerAttribute();
            createTag = this.tagFabric.createBodyTag(content, parameters);
        }

        if (!this.tags[tag])
		{
			this.tags[tag] = []
		}

        this.tags[tag].push(createTag);
	}
}
