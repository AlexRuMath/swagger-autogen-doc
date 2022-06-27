class ApplicationError {
    constructor(message, object){
        this.message = message;
        this.object = object;
    }
}

module.exports = ApplicationError;