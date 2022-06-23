const axios = require("axios");
const ApiResponse = require("./api-response");

class ApiRequest {
    constructor() {
        this.endpoint = "";
        this.method = "";
        this.parameters = [];
    }

    async send(baseUrl) {
        let apiResponse = new ApiResponse();
        apiResponse.response = await axios[this.method](baseUrl + this.endpoint);
        
        return apiResponse;
    }
}

module.exports = ApiRequest;