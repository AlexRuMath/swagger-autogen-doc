const Rout = require('../../classes/Elements/Rout.js');
const Url = require('../../classes/Elements/Url.js');
const ApiRepository = require('../../../repositories/api-repositories');

module.exports = (text, file, options) => {
    let res = [];
    let allApi = ApiRepository.getAll();

    for (let i = 0; i < allApi.length; i++) {
        let findApi = allApi[i].pathRegexp.exec(text);
        if (findApi) {
            let api = ApiRepository.getByPath(findApi[0]);
            let method = api.method;
            let endpoint = api.path;
            let filename = file.split('/').pop().replace('.js', '');

            if (api.validationSchema) {
                const swagger_scheme = j2s(api.validationSchema).swagger;
                SchemaRepository.add({
                    filename: filename,
                    schema: swagger_scheme
                })
            }
            let url = new Url(endpoint, options);
            res.push(new Rout(method, url, findApi.index, filename));
        }
    }
    return res;
}