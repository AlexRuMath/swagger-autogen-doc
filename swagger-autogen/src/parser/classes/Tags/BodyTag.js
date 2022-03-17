export default class BodyTag {
    constructor(data, params) {
        if (params.length !== 0) {
            this.params = params[0].getText().split('=')[1];
        }
        else {
            this.scheme = JSON.parse(data);
        }
    }
    getContent() {
        return this.scheme;
    }
}
//# sourceMappingURL=BodyTag.js.map