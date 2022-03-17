export default class ParamTag {
    constructor(content, param) {
        this.content = content;
        this.param = {};
        for (let i = 0; i < param.length; i++) {
            let [key, value] = param[i].getText().split('=');
            this.param[key] = value;
        }
    }
    getContent() {
        return {
            content: this.content,
            parameters: this.param
        };
    }
}
//# sourceMappingURL=ParamTag.js.map