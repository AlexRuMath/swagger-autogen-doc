const types = require("../enums/types");
const schemes = require("../enums/http-schems");

class BasicAuth {
    constructor(){
        this.type = types.HTTP;
        this.scheme = schemes.Basic;
    }
}

module.exports = BasicAuth;