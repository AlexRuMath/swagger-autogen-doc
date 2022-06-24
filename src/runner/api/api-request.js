const axios = require("axios");
const ApiResponse = require("./api-response");

class ApiRequest {
    constructor() {
        this.endpoint = "";
        this.method = "";
        this.parameters = {};
    }

    async send(baseUrl) {
        let response = {};
        let requestConfig = {
            method: this.method,
            baseURL: baseUrl,
            url: this.endpoint,
            headers: { 'ContentType': 'application/json' },
            ...this.parameters.example
        }
        try {
            response = await axios(requestConfig);
            let apiResponse = new ApiResponse(response);
            return apiResponse;
        } catch (e) {
            console.log(e.message);
            return new ApiResponse(e.response);
        }
    }
}

module.exports = ApiRequest;