import NodeDocument from "../../base-classes/NodeDocument.js";

export default class PathItem extends NodeDocument
{
    method: string;
    summary: string;
    description: string;

    constructor()
    {
        super();
    }
}