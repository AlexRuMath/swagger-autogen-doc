import OperationObject from "./OperationObject.js";
import NodeDocument from "../../base-classes/NodeDocument.js";

export default class PathItemBuilder
{
    private item: OperationObject;

    constructor()
    {
        this.reset();
    }

    reset()
    {
        this.item = new OperationObject();
    }

    getItem(): OperationObject
    {
        let res = this.item;
        this.reset();
        return res;
    }

    setMethod(method: string)
    {
        this.item.method = method;
    }

    setSummary(content: string)
    {
        this.item.summary = content;
    }

    setDescription(content: string)
    {
        this.item.description = content;
    }

    setResponses(responses: NodeDocument)
    {
        this.item.addChildren("response", responses);
    }

    setParameters(parameters: NodeDocument)
    {
        this.item.addChildren("parameters", parameters);
    }
}