import PropertiesItem from "./PropertiesItem.js";
import NodeDocument from "../../base-classes/NodeDocument";

export default class Definition extends NodeDocument
{
    readonly type: string = 'object';
    properties: Map<string, PropertiesItem>;
    required: string[];

    constructor(properties: Map<string, PropertiesItem>, required: string[])
    {
        super();
        this.properties = properties;
        this.required = required;
    }

    getContent()
    {

    }
}