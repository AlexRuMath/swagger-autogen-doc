import Tag from './../../interfaces/Tag'
import {ParserRuleContext} from "antlr4";

export default class BodyTag implements Tag
{
    scheme: object;
    params: string;

    constructor(data: string, params: ParserRuleContext[])
    {
        if(params.length !== 0)
        {
            this.params = params[0].getText().split('=')[1];
        } else {
            this.scheme = JSON.parse(data);
        }
    }

    getContent()
    {
        return this.scheme;
    }
}
