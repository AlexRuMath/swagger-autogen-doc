const parseStrategies = require("../strategies");
const pathBodyPrototype = require("../prototype/path-body");
const queryParamPrototype = require("../prototype/query-param");
const bodyParamPrototype = require("../prototype/body-param");
const SchemaRepository = require("../../repositories/schem-repositories");

const parseSchemaQuery = function(schema, filename){
    let res = [];
    for (let name of Object.keys(schema.schema.properties)) {
        let object = queryParamPrototype();
        object.name = name;
        object.schema = {
            "$ref": '#/definitions/' + filename
        }
        res.push(object);
    }

    return res;
}

const parseSchemaBody = function(schema, filename){
    let object = bodyParamPrototype();
    object.schema = {
        "$ref": '#/definitions/' + filename
    };

    return [object];
}

const parseSchema = function(schema, filename){
    return schema.in === 'query' ? parseSchemaQuery(schema, filename) : parseSchemaBody(schema, filename);
};

module.exports = (rout) => {
    let result = {};
    let pathBody = pathBodyPrototype(rout.url.controller);

    rout.url.params.forEach((param) => {
        pathBody.parameters.push(queryParamPrototype(param.name));
    })

    let schema = SchemaRepository.getByFileName(rout.filename);
    if (schema) {
        pathBody.parameters = parseSchema(schema, rout.filename);
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