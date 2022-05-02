const pathRegexp = require("path-to-regexp");

module.exports = class Url {
    constructor(path, options) {
        this.path = path.replace("'", "");
        this.params = [];
        pathRegexp.pathToRegexp(path, this.params);
        this.params.forEach((param) => {
            this.path = this.path.replace(":" + param.name, "{" + param.name + "}");
        })

        const match = pathRegexp.match(options.url.templateRout); //TODO Test
        let dataFromPaths = match(path);
        this.controller = dataFromPaths.params[options.url.groupBy];
    }
}