
module.exports = (obj, tags) => {
    let summary = summary.reduce((disc, summary) => disc + summary.getContent(), "");
    obj.summary = summary;
}