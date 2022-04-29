
module.exports = (obj, parameters) => {
    parameters.forEach((parameter) => {
        obj.parameters.push({
            in: "query",
            name: parameter.param.name || "body",
            description: parameter.content,
            required: parameter.param.required || "false",
            type: parameter.param.type || "string"
        })
    })
}