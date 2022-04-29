const Path = require("./schemes/path");
const fs = require("fs");
const parseSummary = require("./strategies/parse-summary");
const parseTags = require("./strategies/parse-tags")
const parseDescription = require("./strategies/parse-description");
const parse = require("nodemon/lib/cli/parse");
const parseResponses = require("./strategies/parse-responses");
const parseBody = require("./strategies/parse-body");



class SwaggerSchemeGenerator {
    constructor(openApi) {
        this.swaggerDoc = { ...openApi };
        this.swaggerDoc.produces = ["application/json", "application/xml"],
        this.swaggerDoc.consumes = ["application/json", "application/xml"],
        this.swaggerDoc.tags = [];
    }

    addTags(tag) {
        this.swaggerDoc.tags.push({
            name: tag.name,
            description: tag.content
        })
    }

    generateDoc(paths, schemes) {
        this.paths = {};

        paths.forEach((path, key) => {
            this.paths[key] = {};
            path.forEach((rout) => {
                let obj = {
                    "summary": "",
                    "description": "",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                };

                if (rout.comment) {
                    let comment = rout.comment.tags;

                    if (comment.tags) {
                        parseTags(obj, comment.tags);
                        if (comment.tags[0].content)
                            this.addTags(comment.tags[0]);
                    }
                    
                    if (comment.summary) {
                        parseSummary(obj, comment.summary);
                    }


                    if (comment.params) {
                        console.log(comment.params);
                    }

                    if (comment.body) {
                        parseBody(obj, comment.body);
                    }

                    if (comment.description) {
                        parseDescription(obj, comment.description);
                    }

                    if (comment.responses) {
                        parseResponses(obj, comment.responses);
                    }
                }
                this.paths[key][rout.method] = { ...obj };
            })
        });

        this.swaggerDoc["paths"] = { ...this.paths };
        if (schemes)
        {
            this.swaggerDoc.definitions = {...schemes}
        }
    }

    getDoc() {
        return this.swaggerDoc;
    }

    writeDoc() {
        let json = JSON.stringify(this.swaggerDoc);
        fs.writeFileSync("swagger.json", json);
    }
}

module.exports = SwaggerSchemeGenerator