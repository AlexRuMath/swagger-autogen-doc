const BaseTag = require("./BaseTag.js");
module.exports = class SummaryTag extends BaseTag {
    constructor(content) {
        super("summary");
        this.content = content;
    }
}
//# sourceMappingURL=SummaryTag.js.map