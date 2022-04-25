import LeafTree from "./LeafTree.js";

export default class NodeTree extends LeafTree
{
    elements: Map<string, LeafTree[]>;

    constructor(name: string)
    {
        super(name);

        this.elements = new Map<string, LeafTree[]>();
    }

    public addElement(nodeName: string, element: LeafTree)
    {
        if(!this.elements.get(nodeName))
        {
            this.elements.set(nodeName, []);
        }

        this.elements.get(nodeName).push(element);
    }

    public getElement(nodeName: string): LeafTree[]
    {
        return this.elements.get(nodeName);
    }
}