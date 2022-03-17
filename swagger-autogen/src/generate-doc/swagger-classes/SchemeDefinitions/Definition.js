import NodeDocument from "../../base-classes/NodeDocument";
export default class Definition extends NodeDocument {
    constructor(properties, required) {
        super();
        this.type = 'object';
        this.properties = properties;
        this.required = required;
    }
    getContent() {
    }
}
//# sourceMappingURL=Definition.js.map