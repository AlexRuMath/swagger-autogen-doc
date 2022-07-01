const ApiParameters = require("../api/api-parameters");
const DataGen = require("../DataGen");

const keys = {
    'params': { params: {} },
    'data': { data: {} },
}

module.exports = (parameters, swaggerDoc) => {
    let res = new ApiParameters();

    for (let i = 0; i < parameters.length; i++) {
        let key = "";
        if (parameters[i].in === 'query') {
            key = 'params';
            res.example = keys[key];
        } else {
            key = 'data';
            res.example = keys[key];
        }
        let schema = parameters[i].schema;
        let schemaName = schema.$ref.split("/").pop();
        res.example[key] = { ...new DataGen().generateObject(swaggerDoc.definitions[schemaName]) };
    }

    return res;
};