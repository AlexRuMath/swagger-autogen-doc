class BaseException {
    constructor(message, object = null)
    {
        this.message = message || "No undefined error";
        this.object = object;
    }
}

module.exports = BaseException;