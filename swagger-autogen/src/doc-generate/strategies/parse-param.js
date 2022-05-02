
module.exports = (obj, parameters) => {
    parameters.forEach((parameter) => {
        let param = obj.parameters.find(element => element.name === parameter.param.name);
        param.description = parameter.content || "";
        param.required = parameter.param.required || "true";
        param.type = parameter.param.type || "string";

        if(param.type === "array")
        {
            param.items = {
                type: "string",
            }
        }
    })
}