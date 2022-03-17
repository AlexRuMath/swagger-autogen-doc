import Tag from './../../interfaces/Tag'

export default class SummaryTag implements Tag
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