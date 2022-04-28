
module.exports = (obj, responses) => {
    responses.forEach((response) => {
        obj.responses[response.code] = {
            description: response.content
        };
    });
}