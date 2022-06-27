module.exports = class Scheme {
    constructor(name, jsonScheme) {
        this.name = name;
        this.scheme = JSON.parse(jsonScheme);
    }
}