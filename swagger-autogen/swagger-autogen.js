const Parser = require('./src/parser/Parser');
const SwaggerSchemeGenerator = require('./src/doc-generate/swagger-generator');
const swaggerUI = require('swagger-ui-express');
const openapi = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for Dangle',
        version: '1.0.0',
        description: 'The REST API for Dangle Panel Service'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server'
        }
    ],
}

module.exports = (dir, app) => {
    let parser = new Parser();
    let docGenerate = new SwaggerSchemeGenerator(openapi);
    let data = parser.parse("/home/alex/Project/NodeJs/node-js-qr-code-manager/");
    docGenerate.generatePaths(data);
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docGenerate.getDoc()));
    docGenerate.writeDoc();
}