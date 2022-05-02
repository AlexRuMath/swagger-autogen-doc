class Options {
    constructor(options) {
        this.url = {
            templateRout: "/api/:version/:controller/:resources+",
            groupBy: "controller",
        }

        if (options) {
            for (let [name, config] of Obejct.entries(options)) {
                this[name] = config;
            }
        }
    }
}

module.exports = Options;