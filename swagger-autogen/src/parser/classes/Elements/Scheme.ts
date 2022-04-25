export default class Scheme
{
    name: string;
    scheme: object;

    constructor(name: string, jsonScheme: string)
    {
        this.name = name;
        this.scheme = JSON.parse(jsonScheme);
    }
}