const axios = require("axios");
const ApiResponse = require("./api-response");

class ApiRequest {
    constructor() {
        this.endpoint = "";
        this.method = "";
        this.parameters = {};
    }

    async send(baseUrl) {
        let apiResponse = new ApiResponse();
        let requestConfig = {
            method: this.method,
            baseUrl: baseUrl,
            url: this.endpoint,
            headers: { 'ContentType': 'application/json' },
            ...this.parameters.example
        }
        apiResponse.response = await axios(requestConfig);
        
        return apiResponse;
    }
}

module.exports = ApiRequest;