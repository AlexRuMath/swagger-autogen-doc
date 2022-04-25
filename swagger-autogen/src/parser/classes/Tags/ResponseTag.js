const BaseTag = require("./BaseTag.js");
module.exports = class ResponseTag extends BaseTag {
    constructor(content, code) {
        super("");
        this.content = content;
        this.code = parseInt(code[0].getText().split('=')[1].replace(/"/g, ''));
        this.name = this.code.toString();
    }
}
//# sourceMappingURL=ResponseTag.js.map