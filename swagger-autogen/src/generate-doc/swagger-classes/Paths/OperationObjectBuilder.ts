import OperationObject from "./OperationObject.js";
import NodeDocument from "../../base-classes/NodeDocument.js";

export default class OperationObjectBuilder
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

    setSummary(summary: string)
    {
        this.item.summary = summary;
    }

    setDescription(description: string)
    {
        this.item.description = description;
    }

    setResponses(responses: object)
    {
        this.item.responses.set("100", responses);
    }

    setParameters(parameters: object)
    {
        this.item.parameters = parameters;
    }
}