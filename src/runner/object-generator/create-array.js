
module.exports = (field_data, ref) => {
    if(field_data.example) return field_data.example;

    let res = [];

    switch (field_data.items.type){
        case "string":
            res.push(ref.generateString(field_data.items));
            break;
    }

    return res;
}