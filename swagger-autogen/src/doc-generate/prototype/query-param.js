module.exports = (name) => {
    return {
        in: "query",
        name: name || "query",
        description: "",
        required: "true",
        type: "string"
    }
}