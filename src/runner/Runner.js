const createApiRequests = require("./utils/create-api-requests");

class Runner {
    constructor(PROTOCOL, DOMEIN, PORT) {
        this.requests = [];
        this.responses = [];
        this.protocol = PROTOCOL;
        this.domein = DOMEIN;
        this.port = PORT || '3000';
    }

    async run() {
        if(this.requests.length === 0) 
            return console.warn("Runner with empty api requests. Maybe you call AddRunner() later Use()");

        this.requests.forEach(async (request) => {
            let url = this.protocol + "://" + this.domein + ":" + this.port;
            let response = await request.send(url);
            this.responses.push(response);
        })
    }
}

module.exports = { Runner, createApiRequests };