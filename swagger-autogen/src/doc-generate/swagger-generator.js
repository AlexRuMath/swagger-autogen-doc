const Path = require("./schemes/path");
const fs = require("fs");
const { runInThisContext } = require("vm");
const parseSummary = require("./strategies/parse-summary");
const parseTags = require("./strategies/parse-tags")


class SwaggerSchemeGenerator {
    constructor(openApi) {
        this.swaggerDoc = { ...openApi };
        this.swaggerDoc.tags = [];
    }

    searchScheme() {

    }

    addTags(tag)
    {
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

                    if(comment.tags)
                    {
                        obj.tags = [comment.tags[0].name];//TODO
                        if (comment.tags[0].content)
                            this.addTags(comment.tags[0]);
                    }

                    if(comment.summary)
                    {
                        parseSummary(comment.summary, obj);
                    }

                    if(comment.description)
                    {
                        let remarks = comment.description.reduce((disc, remarks) => disc + remarks.getContent(), "");
                        obj.description = remarks;
                    }

                    if(comment.responses)
                    {
                        comment.responses.map((response) => {
                            obj.responses[response.code] = {};
                            obj.responses[response.code]["description"] = response.content;
                        });
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