
module.exports = (obj, summary) => {
    obj.summary = summary.reduce((disc, summary) => disc + summary.getContent(), "");
}