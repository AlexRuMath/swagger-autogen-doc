import BaseTag from "./BaseTag.js";

export default class ResponseTag extends BaseTag
{
    content: string;
    code: number;

    constructor(content, code)
    {
        super("");

        this.content = content;
        this.code = parseInt(code[0].getText().split('=')[1].replace(/"/g, ''));
        this.name = this.code.toString();
    }
}