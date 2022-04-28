const BaseTag = require("./BaseTag.js");
module.exports = class TagsTag extends BaseTag {
    constructor(data, params) {
        super("tags");
        this.content = data
        this.name = params[0].getText().split('=')[1].replace(/"/g, '');
    }
    getContent() {
        return this.content;
    }
}
//# sourceMappingURL=BodyTag.js.map