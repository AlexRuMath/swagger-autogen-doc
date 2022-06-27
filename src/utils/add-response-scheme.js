
module.exports = (swaggerDoc, response) => {
    let nameScheme = response.status + "_" + response.endpoint.split('/').pop();
    swaggerDoc.definitions[nameScheme] = response.scheme;
    swaggerDoc
        .paths[response.endpoint][response.method]
        .responses[response.status] = {
        "schema": {
            "$ref": '#/definitions/' + nameScheme
        }
    }
}