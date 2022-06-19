const Parser = require('./src/parser/Parser');
const SwaggerSchemeGenerator = require('./src/doc-generate/swagger-generator');
const Options = require("./src/common/options");
const JWT = require("./src/auth/JWT");
const swaggerUI = require('swagger-ui-express');
const ApiRepository = require('./src/repositories/api-repositories');
const SchemaRepository = require('./src/repositories/schem-repositories');
const AuthTypes = require('./src/auth/types');

class SwaggerAutogen {
    constructor(app, options) {
        this.options = options;
        this.app = app;
        this.parser = new Parser(this.options);
        this.pathToSwaggerDoc = options.absolutePath;
        this.url = this.options.docApi;
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

        if (options.foldersSchems.length != 0) {
            SchemaRepository.addFromFolder(options.foldersSchems);
        }
    }

    set Title(title) {
        this.openapi.info.title = title;
    }

    set Version(version) {
        this.openapi.info.version = version;
    }

    set Description(description){
        this.openapi.info.description = description;
    }

    set Schemes(schemes){
        this.openapi.schemes = [...schemes];
    }

    get PathToDocument() {
        return this.pathToSwaggerDoc;
    }

    set PathToDocument(path) {
        this.pathToSwaggerDoc = path;
    }

    Use() {
        ApiRepository.addFromApp(this.app);
        let routs = this.parser.parse(this.options.folderApi);
        let docGenerate = new SwaggerSchemeGenerator(this.openapi, routs, this.options);
        let swaggerDoc = docGenerate.writeDoc(this.pathToSwaggerDoc);

        this.app.use(this.url, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
        console.log("The endpoint swagger docs: " + this.url);
    }
}

const swaggerSchema = function(schema, api){
    SchemaRepository.add({
        path: api,
        schema: schema
    })

    return schema;
}

const swaggerApi = function (api, auth=null) {
    ApiRepository.add(api);
    return api;
}

module.exports = {
    swaggerApi: swaggerApi,
    Swagger: SwaggerAutogen,
    OptionsSwagger: Options,
    JWT: JWT,
    AuthTypes: AuthTypes
};