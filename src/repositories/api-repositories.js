let repositories = [];

module.exports = {
    add(api) {
        repositories.push(api);
    },

    addFromApp(app) {
        let layers = app._router.stack;
        layers.forEach((layer) => {
            console.log(layer.handle);
            if (layer.route) {
                repositories.push({
                    method: Object.keys(layer.route.methods)[0],
                    path: layer.route.path,
                    pathRegexp: new RegExp(layer.route.path, "g")
                })
            }
        });
    },

    delete(api) {
        repositories.slice(repositories.indexOf(api), 1);
    },

    getByIndex(index) {
        return repositories[index];
    },

    getByPath(path) {
        let result = repositories.filter(api => api.path === path);
        return result[0];
    },

    getAll(){
        return repositories;
    }
};