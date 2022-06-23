const ApiParameters = require("../api/api-parameters");
const DataGen = require("../DataGen");

module.exports = (parameters, swaggerDoc) => {
    let res = [];
    for (let i = 0; i < parameters.length; i++) {
        let parameter = new ApiParameters();

        parameter.in = parameters[i].in;
        parameter.name = parameters[i].name;

        let schema = parameters[i].schema;
        if (schema) {
            let schemaName = schema.$ref.split("/").pop();
            parameter.object = new DataGen().generateObject(swaggerDoc.definitions[schemaName]);
            parameter.schema = schemaName;
        }
    }

    return res;
};