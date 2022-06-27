const toJsonScheme = require('to-json-schema');

class ApiResponse {
    constructor(response) {
        this.endpoint = response.config.url;
        this.method = response.config.method;
        this.status = response.status;
        this.scheme = toJsonScheme(response.data);
        this.response = response;
    }
}

module.exports = ApiResponse;