const BaseTag = require("./BaseTag.js");
module.exports = class SummaryTag extends BaseTag {
    constructor(content) {
        super("summary");
        this.content = content;
    }

    getContent()
    {
        return this.content;
    }
}
//# sourceMappingURL=SummaryTag.js.map