import LeafTree from "./LeafTree.js";
export default class NodeTree extends LeafTree {
    constructor(name) {
        super(name);
        this.elements = new Map();
    }
    addElement(nodeName, element) {
        if (!this.elements.get(nodeName)) {
            this.elements.set(nodeName, []);
        }
        this.elements.get(nodeName).push(element);
    }
    getElement(nodeName) {
        return this.elements.get(nodeName);
    }
}
//# sourceMappingURL=NodeTree.js.map