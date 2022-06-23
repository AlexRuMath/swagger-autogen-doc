const getMethodInPath = require("./get-method-from-path");

module.exports = (swaggerDoc) => {
    let res = [];
    for (let [endpoint, path] of Object.entries(swaggerDoc.paths)) {
        res = res.concat(getMethodInPath(path, endpoint, swaggerDoc));
    }

    return res;
}