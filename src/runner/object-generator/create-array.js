
module.exports = (field_data, ref) => {
    let res = [];

    switch (field_data.items.type){
        case "string":
            res.push(ref.generateString(field_data.items));
            break;
    }

    return res;
}