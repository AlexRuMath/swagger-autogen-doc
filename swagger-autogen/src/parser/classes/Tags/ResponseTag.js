const parseAttrb = require("./../../../utils/parse-attrubute")

module.exports = class ResponseTag {
    constructor(content, code) {
        this.content = content;
        this.code = parseInt(parseAttrb(code)[0]);
        this.name = this.code.toString();
    }

    getContent()
    {
        let result = {};
        result[this.code] = {
            "description": this.content
        }

        return result;
    }
}
//# sourceMappingURL=ResponseTag.js.map