
module.exports = (obj, bodies) => {
    let body = bodies[0];
    obj.parameters.push({
        in: "body",
        name: body.param.name || "body",
        description: body.content,
        required: body.param.required || "false", //TODO Normal if
        schema: {
            "$ref": '#/definitions/' + body.param.schema
        }
    })
}