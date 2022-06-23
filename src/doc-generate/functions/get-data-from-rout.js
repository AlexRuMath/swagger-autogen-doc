const parseStrategies = require("../strategies");
const pathBodyPrototype = require("../prototype/path-body");
const queryParamPrototype = require("../prototype/query-param");
const bodyParamPrototype = require("../prototype/body-param");
const SchemaRepository = require("../../repositories/schem-repositories");
const ApiRepository = require("../../repositories/api-repositories");

const parseSchema = function(schema, filename){
    let res = [];
    let ref = { "$ref": '#/definitions/' + filename }; 
    let isBody = schema.in === 'body';
    
    if(isBody){
        let object = bodyParamPrototype();
        object.schema = ref; 
        res.push(object);
        return res;
    }

    for (let name of Object.keys(schema.schema.properties)) {
        let object = queryParamPrototype(name);
        object.schema = ref;
        res.push(object);
    }

    return res;
}

module.exports = (rout) => {
    let result = {};
    let pathBody = pathBodyPrototype(rout.url.controller);
    let schemaApi = ApiRepository.getByPath(rout.url.path);
    let auth = schemaApi ? schemaApi.auth : false;

    rout.url.params.forEach((param) => {
        pathBody.parameters.push(queryParamPrototype(param.name));
    })

    let schema = SchemaRepository.getByFileName(rout.filename);
    if (schema) {
        pathBody.parameters = parseSchema(schema, rout.filename);
    }

    if(auth){
        pathBody.security = [{
            Auth: []
        }]
    }

    if (rout.comment) {
        let comment = rout.comment.tags;

        for (let [tag_name, tag] of Object.entries(comment)) {
            parseStrategies[tag_name](pathBody, tag);
            if (tag_name === "tags" && tag[0].content)
                this.addTags(tag[0].content);
        }
    }

    result[rout.method] = { ...pathBody }

    return result;
};