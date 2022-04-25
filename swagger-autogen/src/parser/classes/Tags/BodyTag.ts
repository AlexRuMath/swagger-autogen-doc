import {ParserRuleContext} from "antlr4";
import BaseTag from "./BaseTag.js";

export default class BodyTag extends BaseTag
{
    scheme: object;
    params: string;

    constructor(data: string, params: ParserRuleContext[])
    {
        super("body");

        if(params.length !== 0)
        {
            this.params = params[0].getText().split('=')[1];
        } else {
            this.scheme = JSON.parse(data);
        }
    }

    getContent()
    {

    }
}
