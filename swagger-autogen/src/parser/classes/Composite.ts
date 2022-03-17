import Comment from './Elements/Comment.js'
import Rout from './Elements/Rout.js'

export default class Composite
{
    element: Rout;
    comment: Comment;

    constructor(element: Rout, comment: Comment)
    {
        this.element = element;
        this.comment = comment;
    }
}

