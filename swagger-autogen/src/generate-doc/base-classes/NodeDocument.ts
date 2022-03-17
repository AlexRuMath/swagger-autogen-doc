
export default abstract class NodeDocument {
    children: Map<string, NodeDocument[]>;
    private parent: NodeDocument;

    protected constructor() {
        this.children = new Map<string, NodeDocument[]>();
    }

    setParent(parent: NodeDocument) {
        this.parent = parent;
    }

    getParent(): NodeDocument {
        return this.parent;
    }

    getChild(key:string, index: number): NodeDocument {
        return this.children[key][index];
    }

    addChildren(key: string, child: NodeDocument) {
        child.setParent(this);

        if(!this.children[key])
        {
            this.children[key] = [];
        }

        this.children[key].push(child);
    };

    abstract getContent();
}

