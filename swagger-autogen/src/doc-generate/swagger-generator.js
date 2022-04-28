const Path = require("./schemes/path");
const fs = require("fs");
const parseSummary = require("./strategies/parse-summary");
const parseTags = require("./strategies/parse-tags")
const parseDescription = require("./strategies/parse-description");
const parse = require("nodemon/lib/cli/parse");
const parseResponses = require("./strategies/parse-responses");



class SwaggerSchemeGenerator {
    constructor(openApi) {
        this.swaggerDoc = { ...openApi };
        this.swaggerDoc.tags = [];
    }

    searchScheme() {

    }

    addTags(tag) {
        this.swaggerDoc.tags.push({
            name: tag.name,
            description: tag.content
        })
    }

    generatePaths(paths) {
        this.paths = {};

        paths.forEach((path, key) => {
            this.paths[key] = {};
            path.forEach((rout) => {
                let obj = {
                    "summary": "",
                    "description": "",
                    "responses": {}
                };

                if (rout.comment) {
                    let comment = rout.comment.tags;

                    if (comment.tags) {
                        parseTags(obj, comment.tags);
                        if (comment.tags[0].content)
                            this.addTags(comment.tags[0]);
                    }

                    if (comment.summary) {
                        parseSummary(comment.summary, obj);
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