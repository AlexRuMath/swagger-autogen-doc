const Parser = require('./src/parser/Parser');
const SwaggerSchemeGenerator = require('./src/doc-generate/swagger-generator');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

module.exports = (dir, app, openapi) => {
    let parser = new Parser();
    let docGenerate = new SwaggerSchemeGenerator(openapi);
    let paths = parser.parse(dir);
    docGenerate.generateDoc(paths, parser.schemes);
    docGenerate.writeDoc();

    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docGenerate.getDoc()));
}