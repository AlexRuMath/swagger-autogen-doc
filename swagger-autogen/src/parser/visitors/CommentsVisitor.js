const SwaggerParserVisitor = require("../grammar/swagger-gen/SwaggerParserVisitor.js");
const TagFabric = require("../classes/TagFabric.js");
const tags = require("../../tags")
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

        if (tag === tags.summary) {
            createTag = this.tagFabric.createSummaryTag(content);
        }

        if (tag === tags.response) {
			tag = "responses";
            let parameters = ctx.swaggerAttribute();
            createTag = this.tagFabric.createResponseTag(content, parameters);
        }

        if (tag === tags.parameters) {
			tag = "parameters";
            let parameters = ctx.swaggerAttribute();
            createTag = this.tagFabric.createParamTag(content, parameters);
        }

        if (tag === tags.remarks) {
			tag = "description";
            createTag = this.tagFabric.createRemarksTag(content);
        }

        if (tag === tags.body) {
        	let parameters = ctx.swaggerAttribute();
            createTag = this.tagFabric.createBodyTag(content, parameters);
        }

		if (tag === tags.tags)
		{
			tag = "tags";
        	let parameters = ctx.swaggerAttribute();
			createTag = this.tagFabric.createTagsTag(content, parameters); 
		}

        if (!this.tags[tag])
		{
			this.tags[tag] = []
		}

        this.tags[tag].push(createTag);
	}
}
