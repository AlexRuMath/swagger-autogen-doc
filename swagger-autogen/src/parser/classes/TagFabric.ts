import SummaryTag from "./Tags/SummaryTag.js";

import RemarksTag from "./Tags/RemarksTag.js";

import ResponseTag from "./Tags/ResponseTag.js";

import ParamTag from "./Tags/ParamTag.js";

import BodyTag from "./Tags/BodyTag.js";

export default class TagFabric
{
    createSummaryTag(content)
    {
        return new SummaryTag(content);
    }
    
    createResponseTag(content, param)
    {
        return new ResponseTag(content, param)
    }
    
    createParamTag(content, param)
    {
        return new ParamTag(content, param);
    }
    
    createRemarksTag(content)
    {
        return new RemarksTag(content);
    }

    createBodyTag(content, param)
    {
        return new BodyTag(content, param);
    }
}