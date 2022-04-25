const BaseTag = require("./BaseTag.js");
module.exports = class BodyTag extends BaseTag {
    constructor(data, params) {
        super("body");
        if (params.length !== 0) {
            this.params = params[0].getText().split('=')[1];
        }
        else {
            this.scheme = JSON.parse(data);
        }
    }
    getContent() {
    }
}
//# sourceMappingURL=BodyTag.js.map