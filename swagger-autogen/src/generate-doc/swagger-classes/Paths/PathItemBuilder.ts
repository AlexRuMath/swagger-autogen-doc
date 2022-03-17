import PathItem from "./PathItem.js";
import {QueryType} from "../../../Enums/QueryType";
import NodeDocument from "../../base-classes/NodeDocument.js";

export default class PathItemBuilder
{
    private item: PathItem;

    constructor()
    {
        this.reset();
    }

    reset()
    {
        this.item = new PathItem();
    }

    getItem(): PathItem
    {
        let res = this.item;
        this.reset();
        return res;
    }

    setMethod(method: QueryType)
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