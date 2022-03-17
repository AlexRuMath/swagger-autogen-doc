export default class ParseTree {
    constructor() {
        this.routs = new Map();
    }
    addRout(key, rout) {
        if (!this.routs.get(key)) {
            this.routs.set(key, []);
        }
        this.routs.get(key).push(rout);
    }
    getRout(key) {
        return this.routs.get(key);
    }
}
//# sourceMappingURL=ParseTree.js.map