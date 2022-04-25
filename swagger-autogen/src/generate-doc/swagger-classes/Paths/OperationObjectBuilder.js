import OperationObject from "./OperationObject.js";
export default class PathItemBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.item = new OperationObject();
    }
    getItem() {
        let res = this.item;
        this.reset();
        return res;
    }
    setMethod(method) {
        this.item.method = method;
    }
    setSummary(content) {
        this.item.summary = content;
    }
    setDescription(content) {
        this.item.description = content;
    }
    setResponses(responses) {
        this.item.addChildren("response", responses);
    }
    setParameters(parameters) {
        this.item.addChildren("parameters", parameters);
    }
}
//# sourceMappingURL=PathItemBuilder.js.map