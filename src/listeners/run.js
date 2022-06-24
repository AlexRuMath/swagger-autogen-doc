const { Runner, createApiRequests } = require("../runner/Runner");
const addSchemeResponse = require("../utils/add-response-scheme");
const fs = require('fs');

module.exports = function (pathToDoc) {
    return async function (port) {
        let swaggerDoc = JSON.parse(fs.readFileSync(pathToDoc));
        let requests = createApiRequests(swaggerDoc);
        let runner = new Runner(requests, port);
        let responses = await runner.run();
        responses.map(response => addSchemeResponse(swaggerDoc, response));
        let json = JSON.stringify(swaggerDoc);
        fs.writeFileSync(pathToDoc, json);
    }
}