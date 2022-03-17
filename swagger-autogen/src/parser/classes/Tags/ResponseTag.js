export default class ResponseTag {
    constructor(content, code) {
        this.content = content;
        this.code = parseInt(code[0].getText().split('=')[1].replace(/"/g, ''));
    }
    getContent() {
        return {
            content: this.content,
            code: this.code
        };
    }
}
//# sourceMappingURL=ResponseTag.js.map