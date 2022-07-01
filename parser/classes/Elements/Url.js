const pathRegexp = require("path-to-regexp");

module.exports = class Url {
    constructor(path, options) {
        this.path = path.replace("'", "");
        this.params = [];

        this.parseParams();
        this.parseGroup(options);
    }

    parseParams() {
        try {
            pathRegexp.pathToRegexp(this.path, this.params);
            this.params.forEach((param) => {
                this.path = this.path.replace(":" + param.name, "{" + param.name + "}");
            })
        } catch (e) {
            console.log(e);
            console.error("Dont parse the endpoint " + this.path);
        }
    }

    parseGroup(options) {
        try {
            const match = pathRegexp.match(options.url.templateRout); //TODO Test
            let dataFromPaths = match(this.path);
            if (dataFromPaths) {
                this.controller = dataFromPaths.params[options.url.groupBy];
            } else {
                this.controller = "Common";
            }
        }catch (e) {
            console.log(e);
            console.error("Dont create group with template " + options.url.templateRout);
        }
    }
}