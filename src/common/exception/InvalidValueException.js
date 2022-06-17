const BaseException = require("./BaseException");

class InvalidValueException extends BaseException {
    constructor(value, object)
    {
        super(`The token in current position not equal ${value}`, object);
    }
}

module.exports = InvalidValueException;