const Parser = require('./src/parser/Parser');
const SwaggerSchemeGenerator = require('./src/doc-generate/swagger-generator');
const Options = require("./src/common/options");
const BasicAuth = require('./src/auth/prototypes/BasicAuth');
const BearerAuth = require('./src/auth/prototypes/BearerAuth');
const ApiKeyAuth = require('./src/auth/prototypes/ApiKeyAuth');
const run = require("./src/listeners/run");
const swaggerUI = require('swagger-ui-express');
const ApiRepository = require('./src/repositories/api-repositories');
const SchemaRepository = require('./src/repositories/schem-repositories');
const hotLoad = require("./middleware/hot-load");


class SwaggerAutogen {
    constructor(app, options) {
        this.options = options;
        this.app = app;
        this.parser = new Parser(this.options);
        this.pathToSwaggerDoc = options.absolutePath + options.pathDoc.slice(1);
        this.url = this.options.endpointSwagger;
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

    Use() {
        let routs = this.parser.parse(this.options.folderApi);
        let docGenerate = new SwaggerSchemeGenerator(this.openapi, routs, this.options);
        let swaggerDoc = docGenerate.writeDoc();

        this.app.use(this.url, hotLoad(this.pathToSwaggerDoc), swaggerUI.serveFiles(swaggerDoc), swaggerUI.setup());
        console.log("The endpoint swagger docs: " + this.url);
        
        this.app.on('run', run(this.pathToSwaggerDoc));
    }
}

const swaggerApi = function (api, auth=null) {
    ApiRepository.add({
        api: api,
        auth: auth
    });
    return api;
}

module.exports = {
    swaggerApi: swaggerApi,
    Swagger: SwaggerAutogen,
    OptionsSwagger: Options,
    AuthTypes: {
        BasicAuth,
        BearerAuth,
        ApiKeyAuth
    }
};