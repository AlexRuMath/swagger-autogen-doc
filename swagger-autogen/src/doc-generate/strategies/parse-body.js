
module.exports = (obj, body) => {
    obj.parameters.push({
        in: "body",
        name: body[0].param.name ? body[0].param.name : "body",
        description: body[0].content,
        required: body[0].param.required ? body[0].param.required : false, //TODO Normal if
        schema: {
            "$ref": '#/definitions/' + body[0].param.schema
        }
    })
}