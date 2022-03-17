import {QueryType} from "../../../Enums/QueryType";
import NodeDocument from "../../base-classes/NodeDocument.js";

export default class PathItem extends NodeDocument
{
    method: QueryType;
    summary: string;
    description: string;

    constructor()
    {
        super();
    }

    getContent()
    {

    }
}