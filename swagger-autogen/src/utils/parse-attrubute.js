

module.exports = (params) => {
    let result = {};

    for (let i = 0; i < params.length; i++) {
        let [key, value] = params[i].getText().split('=');
        result[key] = value.substr(1, value.length - 2);
    }

    return result;
}