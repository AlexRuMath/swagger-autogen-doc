module.exports = class Url {
    constructor(path) {
        this.path = path;
        this.params = [];
        this._getParamFromPath();
    }
    _getParamFromPath() {
        let _regexParamsUrl = /(\/:\w+)+/m;
        let matchParams = _regexParamsUrl.exec(this.path);
        if (matchParams) {
            this.params = matchParams[0].split('/:').filter((el) => el !== '');
            this.path = this.path.replace(matchParams[0], `/{${this.params}}`);
        }
    }
}
//# sourceMappingURL=Url.js.map