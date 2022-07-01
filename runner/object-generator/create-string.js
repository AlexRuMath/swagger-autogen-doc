
module.exports = (field_data, ref) => {
    if(field_data.example) return field_data.example;
    if(field_data.enum) return field_data.enum[0];

    let res = "string";

    switch (field_data.format) {
        case "email":
            res = "test@mail.com";
            break;
    }

    if(field_data.minLength){
        if(res.length < field_data.minLength){
            for(let c = '0'; res.length != field_data.minLength; c++){
                res += c;
            }
        }
    }

    if(field_data.maxLength){
        if(res.length > field_data.maxLength){
            res = res.slice(0, field_data.maxLength);
        }
    }

    return res;
}