const fs = require("fs");
const getDataFromRout = require("./functions/get-data-from-rout");


class SwaggerSchemeGenerator {
    constructor(openApi, paths, schemes, options) {
        this.options = options;
        this.swaggerDoc = { ...openApi };
        this.swaggerDoc.produces = ["application/json", "application/xml"];
        this.swaggerDoc.consumes = ["application/json", "application/xml"];
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
                this.paths[key] = {...getDataFromRout(rout, schemes)}
            })
        });

        this.swaggerDoc["paths"] = { ...this.paths };

        if(this.options.jwt)
        {
            this.swaggerDoc.securityDefinitions = {
                JWT: this.options.jwt
            }
        }

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