import NodeDocument from "../../base-classes/NodeDocument";

export class ResponseItem extends NodeDocument
{
    description: string;

    constructor(description: string)
    {
        super();
        this.description = description;
    }

    getContent()
    {

    }
}