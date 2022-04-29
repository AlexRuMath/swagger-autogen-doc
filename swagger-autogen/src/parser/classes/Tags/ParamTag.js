const parseAttrb = require("./../../../utils/parse-attrubute")

module.exports = class ParamTag {
    constructor(content, param) {
        this.content = content;
        this.param = parseAttrb(param);
    }
    getContent() {
        return;
    }
}
//# sourceMappingURL=ParamTag.js.map