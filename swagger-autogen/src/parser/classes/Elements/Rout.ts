import Element from './../../interfaces/Element'
import Url from "./Url";
import {QueryType} from "../../../Enums/QueryType";

export default class Rout implements Element{
    index: number;
    method: QueryType;
    url: Url;

    constructor(method: QueryType, url: Url, index: number) {
        this.index = index;
        this.method = method;
        this.url = url;
    }
}