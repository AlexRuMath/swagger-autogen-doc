const ApiRequest = require("../api/api-request");
const getParametersInPath = require("./get-parameters-from-path");

module.exports = (path, endpoint, swaggerDoc) => {
    let res = [];
    for (let [method, data] of Object.entries(path)) {
        let request = new ApiRequest();
        let parameters = getParametersInPath(data.parameters, swaggerDoc);

        request.endpoint = endpoint;
        request.method = method;
        request.parameters = parameters;

        res.push(request);
    }

    return res;
}