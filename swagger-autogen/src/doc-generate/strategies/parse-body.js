
module.exports = (obj, bodies) => {
    let body = bodies[0];
    let parameter = obj.parameters.find(element => element.in === "body");
    parameter.name = body.param.name || "body";
    parameter.description = body.content || "";
    parameter.required = body.param.required || "true";

    if(body.param.schema)
    {
        parameter.schema = {
            "$ref": '#/definitions/' + body.param.schema
        }
    }

    obj.parameters.push(parameter);
}