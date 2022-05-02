const fs = require("fs");
const parseStrategies = require("./strategies");


class SwaggerSchemeGenerator {
    constructor(openApi, paths, schemes, options) {
        this.options = options;
        this.swaggerDoc = { ...openApi };
        this.swaggerDoc.produces = ["application/json", "application/xml"],
            this.swaggerDoc.consumes = ["application/json", "application/xml"],
            this.swaggerDoc.tags = [];

        this.generateDoc(paths, schemes);
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
                    "tags": [rout.url.controller],
                    "summary": "",
                    "description": "",
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "OK"
                        }
                    }
                };

                if (rout.url.params.length !== 0) {
                    rout.url.params.forEach((param) => {
                        obj.parameters.push({
                            in: "query",
                            name: param || "query",
                            description: "",
                            required: "true",
                            type: "string"
                        })
                    })
                }

                if (rout.method === "post" || rout.method === "put" || rout.method === "patch")
                {
                    obj.parameters.push({
                        in: "body",
                        name: "body",
                        description: "",
                        required: "true",
                        schema: {
                            type: "object",
                            properties: {}
                        }
                    })
                }

                if (rout.comment) {
                    let comment = rout.comment.tags;

                    for (let [tag_name, tag] of Object.entries(comment)) {
                        parseStrategies[tag_name](obj, tag);
                        if (tag_name === "tags" && tag[0].content)
                            this.addTags(tag[0].content);
                    }
                }
                this.paths[key][rout.method] = { ...obj };
            })
        });

        this.swaggerDoc["paths"] = { ...this.paths };
        if (schemes) {
            this.swaggerDoc.definitions = { ...schemes }
        }
    }

    getDoc() {
        return this.swaggerDoc;
    }

    writeDoc(pathToFile) {
        let json = JSON.stringify(this.swaggerDoc);
        let path = this.options.pathDoc;
        fs.writeFileSync(path, json);

        return this.swaggerDoc;
    }
}

module.exports = SwaggerSchemeGenerator