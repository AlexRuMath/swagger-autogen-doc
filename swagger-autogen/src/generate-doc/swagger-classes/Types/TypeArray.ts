import Type from "./Type.js";


export default class TypeArray implements Type
{
    type: string = "array";
    items: Type;

    constructor(items: Type)
    {
        this.items = items;
    }
}
