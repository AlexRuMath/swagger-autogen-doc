class Options {
    constructor(options, dir) {
        this.absolutePath = dir;
        this.pathDoc = "./swagger.json";
        this.endpointSwagger = '/api-docs';
        this.folderApi = dir;
        this.foldersSchems = [];
        this.auth = null;
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