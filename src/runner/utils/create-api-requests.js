const getMethodInPath = require("./get-method-from-path");

module.exports = (swaggerDoc) => {
    let res = [];
    for (let [endpoint, path] of Object.entries(swaggerDoc.paths)) {
        let newRes = getMethodInPath(path, endpoint, swaggerDoc);
        for(let i = 0; i < newRes.length; i++){
            res.push(newRes[i]);
        }
    }

    return res;
}