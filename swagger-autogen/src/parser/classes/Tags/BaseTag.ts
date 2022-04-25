
export default abstract class BaseTag
{
    name: string;

    protected constructor(name: string)
    {
        this.name = name;
    }

    abstract getContent();
}