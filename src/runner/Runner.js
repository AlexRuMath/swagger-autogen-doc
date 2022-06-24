const createApiRequests = require("./utils/create-api-requests");

class Runner {
    constructor(requests, PORT) {
        this.requests = requests;
        this.responses = [];
        this.protocol = 'http';
        this.domain = 'localhost';
        this.port = PORT || '3000';
    }

    async run() {
        if (this.requests.length === 0)
            return console.warn("Runner with empty api requests. Maybe you call AddRunner() later Use()");


        for (let i = 0; i < this.requests.length; i++) {
            try {
                let request = this.requests[i];
                let url = this.protocol + "://" + this.domain + ":" + this.port;
                let response = await request.send(url);
                this.responses.push(response);
            } catch (e) {
                console.log(e);
            }
        }

        return this.responses;
    }
}

module.exports = { Runner, createApiRequests };