const { pathToRegexp, match, parse, compile } = require("path-to-regexp");

module.exports = class Url {
    constructor(path, controller) {
        this.path = path.replace("'", "");
        this.controller = controller;
        this.params = [];
        const regexp = pathToRegexp(path, this.params);
        this.params.forEach((param) => {
            this.path = this.path.replace(":" + param.name, "{" + param.name + "}");
        })
    }
    _getParamFromPath() {
        let _regexParamsUrl = /(\/:\w+)+/m;
        let matchParams = _regexParamsUrl.exec(this.path);
        if (matchParams) {
            this.params = matchParams[0].split('/:').filter((el) => el !== '');
            this.path = this.path.replace(matchParams[0], `/{${this.params}}`);
        }
    }

    getController()
    {
        
    }
}
//# sourceMappingURL=Url.js.map