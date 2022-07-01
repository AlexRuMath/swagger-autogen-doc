const types = require("../enums/types");
const schemes = require("../enums/http-schems");

class BearerAuth {
    constructor(){
        this.type = types.HTTP;
        this.scheme = schemes.Bearer;
    }
}

module.exports = BearerAuth;