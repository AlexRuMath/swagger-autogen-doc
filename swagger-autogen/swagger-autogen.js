const Parser = require('./src/parser/Parser');
const SwaggerSchemeGenerator = require('./src/doc-generate/swagger-generator');
const Options = require("./src/common/options");
const swaggerUI = require('swagger-ui-express');
const joi = require("joi");

class SwaggerAutogen {
    constructor(app, options) {
        this.options = options;
        this.app = app;
        this.parser = new Parser(this.options);
        this.openapi = {
            swagger: '2.0',
            info: {
                title: 'API on Express',
                version: '1.0.0',
                description: ''
            },
            schemes: [
                'http',
                'https'
            ],
        }

        this.pathToSwaggerDoc = '.';
        this.url = this.options.docApi;        
    }

    set OpenApi(scheme)
    {
        this.openapi = scheme;
    }

    get PathToDocument()
    {
        return this.pathToSwaggerDoc;
    }

    set PathToDocument(path)
    {
        this.pathToSwaggerDoc = path;
    }

    Use()
    {
        let [routs, schemes] = this.parser.parse(this.options.pathToFolderWithApi);
        let docGenerate = new SwaggerSchemeGenerator(this.openapi, routs, schemes, this.options);
        let swaggerDoc = docGenerate.writeDoc(this.pathToSwaggerDoc);

        this.app.use(this.url, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    }
}

module.exports = (app, dir, options=null) => {
    options = new Options(options, dir);
    return new SwaggerAutogen(app, options);
}