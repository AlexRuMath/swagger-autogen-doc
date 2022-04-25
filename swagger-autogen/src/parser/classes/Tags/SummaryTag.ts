import BaseTag from "./BaseTag.js";

export default class SummaryTag extends BaseTag
{
    content: string;

    constructor(content)
    {
        super("summary");

        this.content = content;
    }
}