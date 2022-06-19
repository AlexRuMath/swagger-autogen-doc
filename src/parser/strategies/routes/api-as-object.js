const Rout = require('../../classes/Elements/Rout.js');
const Url = require('../../classes/Elements/Url.js');
const ApiRepository = require('../../../repositories/api-repositories');
const _regexMethod = /\s*method\s*:\s*('get'|'post'|'delete'|'patch')/;
const _regexUrl = /\s*path\s*:\s*('|")(\/.*)*('|")/;



module.exports = (text, file, options) => {
    let findMethod = _regexMethod.exec(text);
    let findPath = _regexUrl.exec(text);
    let res = [];
    if (findMethod && findPath) {
        let api = ApiRepository.getByPath(findPath[2]);
        let method = api ? api.method : findMethod[1].split("'")[1];
        let endpoint = api ? api.path : findPath[2];
        let filename = file.split('/').pop().replace('.js', '');

        if (api) {
            if (api.validationSchema) {
                const swagger_scheme = j2s(api.validationSchema).swagger;
                SchemaRepository.add({
                    filename: filename,
                    schema: swagger_scheme
                })
            }
        } else {
            console.log(`WARNING: The api in ${file} dont mark as swagger api`);
        }

        let url = new Url(endpoint, this.options);
        res.push(new Rout(method, url, findMethod.index, filename));
    }
    return res;
}