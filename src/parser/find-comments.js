const regexpStartComment = /<swagger>/;
const regexpEndComment = /<\/swagger>/;

module.exports = (text, filename) => {
    try {
        let result = [];
        let open = false;
        let radius = "<swagger>".length;

        for (let i = 0; i < text.length - radius; i++) {
            let subTxt = text.substr(i, i + radius);
            let match = open ? regexpEndComment.exec(subTxt) : regexpStartComment.exec(subTxt);
            let text = match[0];

            if (text === "<swagger>" && open) {
                throw `In the ${filename} dont close tags for swagger`;
            }

            result.push(text);
        }
    }catch (e){
        return {isSuccess: false, data: e};
    }
}