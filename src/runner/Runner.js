const fs = require("fs");
const createApiRequests = require("./utils/create-api-requests");
let DataGen = require("./DataGen");

class Runner {
    constructor(apiRequests, protocol, domein, port) {
        this.requests = apiRequests;
        this.responses = [];
        this.protocol = protocol;
        this.domein = domein;
        this.port = port || '3000';
    }

    async run() {
        this.requests.forEach(async (request) => {
            let url = this.protocol + "://" + this.domein + ":" + this.port;
            let response = await request.send(url);
            this.responses.pop(response);
        })
    }
}

const swagger = JSON.parse(fs.readFileSync("/home/alex/Project/NodeJs/Spotlivy/swagger.json"));
let requests = createApiRequests(swagger);
let runner = new Runner(requests);
runner.run();

module.exports = Runner;