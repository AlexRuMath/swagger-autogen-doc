const size = 1;

module.exports = (field_data, ref) => {
    if (field_data.example) return field_data.example;

    let res = [];
    let typeData;

    switch (field_data.items.type) {
        case "string":
            typeData = ref.generateString;
            break;
        case "integer":
            typeData = ref.generateInteger;
            break;
        case "number":
            typeData = ref.generateInteger;
            break;
        case "boolean":
            typeData = ref.generateBool;
            break;
        case "object":
            typeData = ref.generateObject;
            break;
    }

    for (let i = 0; i < size; i++) {
        res.push(typeData(field_data.items));
    }

    return res;
}