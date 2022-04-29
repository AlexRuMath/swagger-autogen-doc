const parseAttrb = require("./../../../utils/parse-attrubute")

module.exports = class BodyTag {
    constructor(data, params) {
        this.content = data
        this.param = parseAttrb(params);
    }
    getContent() {
        return;
    }
}
//# sourceMappingURL=BodyTag.js.map