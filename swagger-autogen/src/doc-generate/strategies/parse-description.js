
module.exports = (obj, remarks) => {
    obj.description = comment.description.reduce((disc, remarks) => disc + remarks.getContent(), "");
}