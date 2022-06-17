let repositories = [];

module.exports = {
    add(schema) {
        repositories.push(schema);
    },

    addFromFolder(dirs) {
        for (let i = 0; i < dirs.length; i++) {
            let dir = dirs[i];
            let schemes = fs.readdirSync(dir);

            for (let i = 0; i < schemes.length; i++) {
                if (schemes[i] === "index.js") continue;

                let pathToScheme = path.isAbsolute(dir) ? dir : this.options.absolutePath + dir.slice(1)
                const scheme = require(pathToScheme + "/" + schemes[i]);
                const name_scheme = schemes[i].split('.')[0];
                const swagger_scheme = j2s(scheme).swagger;
                repositories.push({
                    filename: name_scheme,
                    scheme: swagger_scheme
                });
            }
        }
    },

    delete(schema) {
        repositories.slice(repositories.indexOf(schema), 1);
    },

    getByIndex(index) {
        return repositories[index];
    },

    getByFileName(filename) {
        let result = repositories.filter(schema => schema.filename === filename);
        return result[0];
    },

    getAllAsJSON() {
        let result = {};
        repositories.forEach(object => {
            result[object.filename] = object.schema;
        });

        return result;
    }
};