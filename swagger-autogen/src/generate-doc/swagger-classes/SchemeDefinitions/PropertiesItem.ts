import Type from "../Types/Type";

export default class PropertiesItem
{
    type: Type;
    format: string;
    description: string;

    constructor(type: Type, format: string, description: string)
    {
        this.type = type;
        this.format = format;
        this.description = description;
    }
}