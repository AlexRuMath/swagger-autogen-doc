const parseStrategies = require("../strategies");
const pathBodyPrototype = require("../prototype/path-body");
const queryParamPrototype = require("../prototype/query-param");
const bodyParamPrototype = require("../prototype/body-param");

module.exports = (rout, schemes) => {
    let result = {};
    let pathBody = pathBodyPrototype(rout.url.controller);

    rout.url.params.forEach((param) => {
        pathBody.parameters.push(queryParamPrototype(param.name));
    })

    if (rout.method === "post" || rout.method === "put" || rout.method === "patch") {
        let schema = schemes[rout.filename];
        let body = bodyParamPrototype();
        if (schema) {
            body.schema = {
                "$ref": '#/definitions/' + rout.filename
            } 
        }
        pathBody.parameters.push(body);
    }

    if (rout.comment) {
        let comment = rout.comment.tags;

        for (let [tag_name, tag] of Object.entries(comment)) {
            parseStrategies[tag_name](pathBody, tag);
            if (tag_name === "tags" && tag[0].content)
                this.addTags(tag[0].content);
        }
    }
    
    result[rout.method] = {...pathBody}

    return result;
};