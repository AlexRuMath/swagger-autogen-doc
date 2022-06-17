const SwaggerParserVisitor = require("../grammar/swagger-gen/SwaggerParserVisitor.js");
const tags = require("../classes/Tags");
// This class defines a complete generic visitor for a parse tree produced by SwaggerParser.

module.exports = class CommentsVisitor extends SwaggerParserVisitor {

	constructor() {
		super();
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

	addTag(ctx) {
		if(ctx.children === null) return;

		let tag = ctx.getChild(1).getText();
		let content = ctx.swaggerContent().getText();
		let createTag = {};
		let parameters = ctx.swaggerAttribute() || null;

		createTag = new tags[tag](content, parameters);

		if (!this.tags[tag]) {
			this.tags[tag] = [];
		}

		this.tags[tag].push(createTag);
	}
}
