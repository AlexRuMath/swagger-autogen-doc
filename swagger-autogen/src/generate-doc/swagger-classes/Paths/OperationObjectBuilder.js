import OperationObject from "./OperationObject.js";
export default class OperationObjectBuilder {
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
    setSummary(summary) {
        this.item.summary = summary;
    }
    setDescription(description) {
        this.item.description = description;
    }
    setResponses(responses) {
        this.item.responses.set("100", responses);
    }
    setParameters(parameters) {
        this.item.parameters = parameters;
    }
}
//# sourceMappingURL=OperationObjectBuilder.js.map