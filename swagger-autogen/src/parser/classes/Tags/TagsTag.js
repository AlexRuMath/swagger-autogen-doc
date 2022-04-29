const parseAttrb = require("./../../../utils/parse-attrubute")

module.exports = class TagsTag {
    constructor(data, params) {
        this.content = data
        this.name = parseAttrb(params)[0];
    }
    getContent() {
        return this.content;
    }
}
//# sourceMappingURL=BodyTag.js.map