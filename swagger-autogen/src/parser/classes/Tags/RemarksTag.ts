import BaseTag from "./BaseTag.js";

export default class RemarksTag extends BaseTag
{
    content: string;

    constructor(content)
    {
        super("description");

        this.content = content;
    }

    getContent()
    {
        return this.content;
    }
}