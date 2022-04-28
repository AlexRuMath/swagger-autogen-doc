const SummaryTag = require("./Tags/SummaryTag.js");
const RemarksTag = require("./Tags/RemarksTag.js");
const ResponseTag = require("./Tags/ResponseTag.js");
const ParamTag = require("./Tags/ParamTag.js");
const BodyTag = require("./Tags/BodyTag.js");
const TagsTag = require("./Tags/TagsTag.js");

module.exports = class TagFabric {
    createSummaryTag(content) {
        return new SummaryTag(content);
    }
    createResponseTag(content, param) {
        return new ResponseTag(content, param);
    }
    createParamTag(content, param) {
        return new ParamTag(content, param);
    }
    createRemarksTag(content) {
        return new RemarksTag(content);
    }
    createBodyTag(content, param) {
        return new BodyTag(content, param);
    }

    createTagsTag(content, param) {
        return new TagsTag(content, param);
    }
}
//# sourceMappingURL=TagFabric.js.map