import Type from "./Type";

export default class TypeBase implements Type
{
    type: string;

    constructor(type: string)
    {
        this.type = type;
    }
}