const parseAttrb = require("../../../utils/parse-attrubute")

module.exports = class TagsTag {
    constructor(data, params) {
        this.content = data
        this.name = parseAttrb(params).name;
    }
    getContent() {
        return;
    }
}
//# sourceMappingURL=BodyTag.js.map