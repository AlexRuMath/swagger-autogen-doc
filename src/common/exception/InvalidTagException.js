const BaseException = require("./BaseException");

class InvalidTagException extends BaseException {
    constructor(tag, object)
    {
        super(`The tag in current position not equal ${tag}`, object);
    }
}

module.exports = InvalidTagException;