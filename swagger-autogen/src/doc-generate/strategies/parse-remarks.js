
module.exports = (obj, remarks) => {
    obj.description = remarks.reduce((disc, remarks) => disc + remarks.getContent(), "");
}