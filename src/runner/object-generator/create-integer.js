
module.exports = (field_data, ref) => {
    if(field_data.enum) return field_data.enum[0];

    let res = 0;

    if(field_data.minimum){
        if(res.length < field_data.minimum){
            res = field_data.minimum;
        }
    }

    if(field_data.maxLength){
        if(res.length > field_data.maximum){
            res = field_data.maximum;
        }
    }

    return res;
}