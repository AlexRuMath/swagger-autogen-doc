const createObject = require("./object-generator/create-object");
const createString = require("./object-generator/create-string");
const createInteger = require("./object-generator/create-integer");
//const createNumber = require("./object-generator/create-number");
const createArray = require("./object-generator/create-array");
//const createBool = require("./object-generator/create-bool");

class DataGen {
    constructor() {

    }

    generateObject(schema) {
        return createObject(schema, this);
    }

    generateString(stringData) {
        return createString(stringData, this);
    }

    generateArray(arrayData) {
        return createArray(arrayData, this);
    }

    generateNumber(numberData) {
        return createInteger(numberData, this);
    }

    generateInteger(integerData) {
        return createInteger(integerData, this);
    }

    generateBool(boolData) {
        return createBool(boolData, this);
    }
}

module.exports = DataGen;