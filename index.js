const Parser = require('./parser/Parser');
const SwaggerSchemeGenerator = require('./doc-generate/swagger-generator');
const Options = require("./common/options");
const BasicAuth = require('./auth/prototypes/BasicAuth');
const BearerAuth = require('./auth/prototypes/BearerAuth');
const ApiKeyAuth = require('./auth/prototypes/ApiKeyAuth');
const run = require("./listeners/run");
const swaggerUI = require('swagger-ui-express');
const ApiRepository = require('./repositories/api-repositories');
const SchemaRepository = require('./repositories/schem-repositories');
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

        
        if (options.foldersSchems.length != 0) SchemaRepository.addFromFolder(options.foldersSchems);
        if (options.Title) this.openapi.info.title = options.Title;
        if (options.Version) this.openapi.info.version = options.Version;
        if (options.Description) this.openapi.info.description = options.Description;
        if (options.Schemes) this.openapi.schemes = options.Schemes;
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

const swaggerApi = function (api, auth = null) {
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
    },

    configure: function (app, options, dir) {
        let swaggerOptions = new Options(options, dir);
        let swagger = new SwaggerAutogen(app, swaggerOptions);
        swagger.Use();
    }
};