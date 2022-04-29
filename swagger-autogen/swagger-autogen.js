const Parser = require('./src/parser/Parser');
const SwaggerSchemeGenerator = require('./src/doc-generate/swagger-generator');
const swaggerUI = require('swagger-ui-express');

class SwaggerAutogen {
    constructor(app, dir) {
        this.app = app;
        this.dir = dir;
        this.parser = new Parser();
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
        this.url = '/api-docs';
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
        let [routs, schemes] = this.parser.parse(this.dir);
        let docGenerate = new SwaggerSchemeGenerator(this.openapi, routs, schemes);
        let swaggerDoc = docGenerate.writeDoc(this.pathToSwaggerDoc);

        this.app.use(this.url, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
    }
}

module.exports = (app, dir) => {
    return new SwaggerAutogen(app, dir);
}