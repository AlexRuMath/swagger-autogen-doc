import ParametersBase from "./ParametersBase";

export default class ParametersBody implements ParametersBase
{
    constructor(name: string, description: string, scheme: object)
    {
        this.name = name;
        this.description = description;
        this.scheme = scheme;
    }

    scheme: object;
    description: string;
    name: string;
    required: boolean = true;

    getContent() {
    }
}