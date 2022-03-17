import ParametersBase from "./ParametersBase";
import NodeDocument from "../../base-classes/NodeDocument";

export default class ParametersQuery extends NodeDocument implements ParametersBase
{

    constructor(name: string, description: string, type: string)
    {
        super();
        this.name = name;
        this.description = description;
        this.type = type;
    }

    description: string;
    name: string;
    required: boolean = true;
    type: string;

    getContent() {
    }
}