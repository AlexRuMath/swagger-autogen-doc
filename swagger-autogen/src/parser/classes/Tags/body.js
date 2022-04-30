const parseAttrb = require("../../../utils/parse-attrubute")

module.exports = class BodyTag {
    constructor(data, params) {
        this.content = data
        this.param = parseAttrb(params);
        this.param.required = new Boolean(this.param.required);
    }
    getContent() {
        return;
    }
}
//# sourceMappingURL=BodyTag.js.map