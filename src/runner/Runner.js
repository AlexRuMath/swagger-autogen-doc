const fs = require("fs");
const createApiRequests = require("./utils/create-api-requests");
let DataGen = require("./DataGen");

class Runner {
    constructor(apiRequests, objects) {
        this.requests = apiRequests;
        this.objects = objects;
        this.responses = [];
        this.protocol = "http";
        this.domein = "localhost";
        this.port = "3000";
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
let mapObjects = new Map();
for(let [name, definition] of Object.entries(swagger.definitions)){
    let object = new DataGen().generateObject(definition);
    mapObjects.set(name, object);
}
let runner = new Runner(requests, mapObjects);
runner.run();
console.log(runner);

module.exports = Runner;