import LeafTree from "../../../Tree/LeafTree.js";

export default class OperationObject extends LeafTree
{
    method: string;
    summary: string;
    description: string;
    parameters: object;
    responses: Map<string, object>;

    constructor()
    {
        super("");
    }
}