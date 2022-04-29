
module.exports = (obj, responses) => {
    responses.forEach((response) => {
        obj.responses[response.params.code] = {
            description: response.content,
        };
    });
}