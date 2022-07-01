module.exports = function (schema, ref){
    let res = {};
    for (let [field, field_data] of Object.entries(schema.properties)) {
        switch (field_data.type) {
            case "string":
                res[field] = ref.generateString(field_data);
                break;
            case "array":
                res[field] = ref.generateArray(field_data);
                break;
            case "number":
                res[field] = ref.generateNumber(field_data);
                break;
            case "integer":
                res[field] = ref.generateInteger(field_data);
                break;
            case "boolean":
                res[field] = ref.generateBool(field_data);
                break;
            case "object":
                res[field] = ref.generateObject(field_data);
                break;
        }
    }

    return res;
}