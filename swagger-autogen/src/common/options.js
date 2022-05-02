class Options {
    constructor(options, dir) {
        this.absolutePath = dir;
        this.pathDoc = "./swagger.json";
        this.docApi = '/api-docs';
        this.pathToFolderWithApi = dir;
        this.pathToFolderWithSchemes = null;
        this.url = {
            templateRout: "/api/:version/:controller/:resources+",
            groupBy: "controller",
        }

        if (options) {
            for (let [name, config] of Object.entries(options)) {
                this[name] = config;
            }
        }
    }
}

module.exports = Options;