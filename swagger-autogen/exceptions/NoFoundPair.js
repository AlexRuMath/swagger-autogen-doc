module.exports = class NoFoundPair {
    constructor(filename, place) {
        this.message = `No found open or close tag, file: ${filename}, text:\n ${place.input.slice(place.index - 60, place.index + 10)}`;
    }
}