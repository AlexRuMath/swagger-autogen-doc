import BaseTag from "./BaseTag.js";
export default class RemarksTag extends BaseTag {
    constructor(content) {
        super("description");
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
//# sourceMappingURL=RemarksTag.js.map