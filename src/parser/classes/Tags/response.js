const parseAttrb = require("../../../utils/parse-attrubute")

module.exports = class ResponseTag {
    constructor(content, params) {
        this.content = content;
        this.params = parseAttrb(params);
    }

    getContent()
    {
        let result = {};
        result[this.params.code] = {
            "description": this.content
        }

        return result;
    }
}