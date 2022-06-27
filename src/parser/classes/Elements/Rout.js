module.exports = class Rout {
    constructor(method, url, index, filename) {
        this.index = index;
        this.method = method;
        this.url = url;
        this.filename = filename;
    }
    setComment(comment) {
        this.comment = comment;
    }
}