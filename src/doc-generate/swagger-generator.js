const fs = require("fs");
const getDataFromRout = require("./functions/get-data-from-rout");
const SchemaRepository = require("../repositories/schem-repositories");


class SwaggerSchemeGenerator {
    constructor(openApi, paths, options) {
        this.options = options;
        this.swaggerDoc = { ...openApi };
        this.swaggerDoc.produces = ["application/json", "application/xml"];
        this.swaggerDoc.consumes = ["application/json", "application/xml"];
        this.swaggerDoc.tags = [];

        this.generateDoc(paths);
    }

    addTags(tag) {
        this.swaggerDoc.tags.push({
            name: tag.name,
            description: tag.content
        })
    }

    generateDoc(paths) {
        this.paths = {};

        paths.forEach((path, key) => {
            this.paths[key] = {};
            path.forEach((rout) => {
                let result = getDataFromRout(rout);
                this.paths[key][rout.method] = result[rout.method]; 
            })
        });

        this.swaggerDoc["paths"] = { ...this.paths };

        if(this.options.auth)
        {
            this.swaggerDoc.securityDefinitions = {
                Auth: this.options.auth
            }
        }

        let schemes = SchemaRepository.getAllAsJSON();
        if (schemes) {
            this.swaggerDoc.definitions = { ...schemes };
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