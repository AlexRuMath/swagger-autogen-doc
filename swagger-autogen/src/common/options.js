class Options {
    constructor(options) {
        this.pathDoc = "./swagger.json";
        this.docApi = '/api-docs';
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