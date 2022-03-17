import Tag from './../../interfaces/Tag'

export default class ParamTag implements Tag
{
    content: string;
    param: object;

    constructor(content, param)
    {
        this.content = content;
        this.param = {};

        for(let i = 0; i < param.length; i++)
        {
            let [key, value] = param[i].getText().split('=');
            this.param[key] = value;
        }
    }

    getContent()
    {
        return {
            content: this.content,
            parameters: this.param
        }
    }
}

