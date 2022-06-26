const ApiRepository = require("../../repositories/api-repositories");
const SchemaRepository = require("../../repositories/schem-repositories");
const Rout = require('../classes/Elements/Rout.js');
const Url = require('../classes/Elements/Url.js');
const j2s = require("joi-to-swagger");
const _regexMethod = /('get'|'post'|'delete'|'patch')/;
const _regexUrl = /('|")(\/.*)*('|")/;
const findComments = require("./find-comments");
const radiusSearchMethod = 50;

module.exports = (text, file, options) => {
    let startPos = 0;
    let res = [];

    for (let i = 0; i < text.length; i++) {
        let subTxt = text.slice(startPos, i);

        let findPath = _regexUrl.exec(subTxt);
        if(!findPath) continue;

        let txtForFindMethod = text.slice(startPos, i + radiusSearchMethod);
        let findMethod = _regexMethod.exec(txtForFindMethod);
        if (!findMethod) continue;

        let schemaApi = ApiRepository.getByPath(findPath[2]);
        let method = schemaApi ? schemaApi.api.method : findMethod[1].split("'")[1];
        let endpoint = schemaApi ? schemaApi.api.path : findPath[2];
        let filename = file.split('/').pop().replace('.js', '');

        if (schemaApi) {
            if (schemaApi.api.validationSchema) {
                const swagger_schema = j2s(schemaApi.api.validationSchema).swagger;
                SchemaRepository.add({
                    in: method === 'get' ? 'query' : 'body',
                    filename: filename,
                    schema: swagger_schema
                })
            }
        } else {
            console.warn(`WARNING: The api in ${file} dont mark as swagger api`);
        }

        let url = new Url(endpoint, options);
        let rout = new Rout(method, url, findMethod.index, filename);
        let comment = findComments(subTxt, file);

        if (comment.length !== 0)
            rout.setComment(comment[0]);

        res.push(rout);
        let lastPart = findPath.index < findMethod.index ? findMethod : findPath;
        startPos = lastPart.index + lastPart[0].slice(1, lastPart[0].length - 2).length;
    }

    return res;
}