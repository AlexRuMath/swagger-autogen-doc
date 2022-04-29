const parseAttrb = require("./../../../utils/parse-attrubute")

module.exports = class ParamTag {
    constructor(content, param) {
        this.content = content;
        this.param = parseAttrb(param);
        this.param.required = new Boolean(this.param.required);
    }
    getContent() {
        return;
    }
}
//# sourceMappingURL=ParamTag.js.map