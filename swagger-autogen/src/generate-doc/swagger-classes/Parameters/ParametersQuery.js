import NodeDocument from "../../base-classes/NodeDocument";
export default class ParametersQuery extends NodeDocument {
    constructor(name, description, type) {
        super();
        this.required = true;
        this.name = name;
        this.description = description;
        this.type = type;
    }
    getContent() {
    }
}
//# sourceMappingURL=ParametersQuery.js.map