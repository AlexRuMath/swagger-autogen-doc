const BaseException = require("./BaseException");

class InvalidPosException extends BaseException {
    constructor(pos, array, object)
    {
        super(`The position out of range in array, ${pos} >= ${array.length}`, object);
    }
}

module.exports = InvalidPosException;