import Tag from './../../interfaces/Tag'

export default class RemarksTag implements Tag
{
    content: string;

    constructor(content)
    {
        this.content = content;
    }

    getContent()
    {
        return this.content;
    }
}