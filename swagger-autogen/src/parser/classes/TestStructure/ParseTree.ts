
export default class ParseTree
{
    routs: Map<string, ParseTree[]>;

    constructor()
    {
        this.routs = new Map<string, ParseTree[]>();
    }

    public addRout(key: string, rout: ParseTree)
    {
        if(!this.routs.get(key))
        {
            this.routs.set(key, []);
        }

        this.routs.get(key).push(rout);
    }

    public getRout(key: string) : ParseTree[]
    {
        return this.routs.get(key);
    }
}