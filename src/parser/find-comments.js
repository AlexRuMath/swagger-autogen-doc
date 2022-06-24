
const Comment = require("./classes/Elements/Comment.js");
const startComment = "<swagger>";
const endComment = "</swagger>";

const regexpStartComment = new RegExp(startComment);
const regexpEndComment = new RegExp(endComment);

const parseSubString = (substring, pos) => {
    let matchStart = regexpStartComment.exec(substring);

    if (matchStart) {
        return { text: matchStart[0], end: pos + matchStart[0].length + 1, open: true };
    }

    let matchEnd = regexpEndComment.exec(substring);

    if (matchEnd) {
        return { text: matchEnd[0], end: pos + matchEnd[0].length + 1, open: false };
    }

    return { text: "", end: pos, open: false };
}

module.exports = (text, filename) => {
    let result = [];
    let open = false;
    let posStart = 0;
    let radius = startComment.length + 1;

    for (let i = 0; i < text.length - radius; i++) {
        let subTxt = text.slice(i, i + radius);
        let match = parseSubString(subTxt, i);

        if (match.text === "") continue;

        if (open === match.open) {
            console.error(`In file ${filename} for ${subTxt} dont have close tags`)
            return [];
        }

        if (match.open) {
            posStart = match.end;
            i = posStart;
            open = !open;
        } else {
            let commentBody = text.slice(posStart + 1, match.end - endComment.length - 1);
            let comment = new Comment(commentBody, posStart, match.end);
            result.push(comment);
            open = !open;
            i = match.end;
        }
    }

    if (open) {
        console.error(`In file ${filename} dont have close tags`)
        return [];
    }

    return result;
}