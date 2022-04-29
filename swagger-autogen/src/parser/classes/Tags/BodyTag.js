const BaseTag = require("./BaseTag.js");
module.exports = class BodyTag extends BaseTag {
    constructor(data, params) {
        super("body");
        this.content = data
        this.param = {};
        for (let i = 0; i < params.length; i++) {
            let [key, value] = params[i].getText().split('=');
            if (key === "required") {
                this.param[key] = new Boolean(value.substr(1, value.length - 2));
            } else {
                this.param[key] = value.substr(1, value.length - 2);
            }

        }
    }
    getContent() {
        return;
    }
}
//# sourceMappingURL=BodyTag.js.map