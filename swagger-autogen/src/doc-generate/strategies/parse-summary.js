
module.exports = (obj, summary) => {
    let summary = summary.reduce((disc, summary) => disc + summary.getContent(), "");
    obj.summary = summary;
}