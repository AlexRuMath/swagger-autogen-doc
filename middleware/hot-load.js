const fs = require("fs");

module.exports = (pathToScheme) => {
    return function(req, res, next){
        let doc = JSON.parse(fs.readFileSync(pathToScheme));
        doc.host = req.get('host');
        req.swaggerDoc = doc;
        next();
    }
}