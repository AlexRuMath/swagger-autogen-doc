import Url from "./Url";
import Comment from "./Comment.js"

export default class Rout
{
    index: number;
    method: string;
    url: Url;
    comment: Comment;

    constructor(method: string, url: Url, index: number) {
        this.index = index;
        this.method = method;
        this.url = url;
    }

    public setComment(comment: Comment)
    {
        this.comment = comment;
    }
}