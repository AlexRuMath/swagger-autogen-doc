const pathRegexp = require("path-to-regexp");

module.exports = class Url {
    constructor(path, options) {
        this.path = path.replace("'", "");
        this.params = [];
        
        this.parseParams();
        this.parseGroup(options);
    }

    parseParams()
    {
        pathRegexp.pathToRegexp(this.path, this.params);
        this.params.forEach((param) => {
            this.path = this.path.replace(":" + param.name, "{" + param.name + "}");
        })
    }

    parseGroup(options)
    {
        const match = pathRegexp.match(options.url.templateRout); //TODO Test
        let dataFromPaths = match(this.path);
        if (dataFromPaths) {
            this.controller = dataFromPaths.params[options.url.groupBy];
        } else {
            this.controller = "Common";
        }
    }
}