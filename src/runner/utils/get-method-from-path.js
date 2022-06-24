const ApiRequest = require("../api/api-request");
const ApiParameters = require("../api/api-parameters");
const getParametersInPath = require("./get-parameters-from-path");

module.exports = (path, endpoint, swaggerDoc) => {
    let res = [];
    for (let [method, data] of Object.entries(path)) {
        let request = new ApiRequest();
        let param = new ApiParameters();
        let parameters = getParametersInPath(data.parameters, swaggerDoc);

        param.example = Object.assign(param.example, parameters.example);

        request.endpoint = endpoint;
        request.method = method;
        request.parameters = param;

        res.push(request);
    }

    return res;
}