const BaseTag = require("./BaseTag.js");
module.exports = class ParamTag extends BaseTag {
    constructor(content, param) {
        super("parameters");
        this.content = content;
        this.param = {};
        for (let i = 0; i < param.length; i++) {
            let [key, value] = param[i].getText().split('=');
            this.param[key] = value.substr(1, value.length - 2);
        }
    }
    getContent() {
    }
}
//# sourceMappingURL=ParamTag.js.map