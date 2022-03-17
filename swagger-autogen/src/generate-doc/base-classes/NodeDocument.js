export default class NodeDocument {
    constructor() {
        this.children = new Map();
    }
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    getChild(key, index) {
        return this.children[key][index];
    }
    addChildren(key, child) {
        child.setParent(this);
        if (!this.children[key]) {
            this.children[key] = [];
        }
        this.children[key].push(child);
    }
    ;
}
//# sourceMappingURL=NodeDocument.js.map