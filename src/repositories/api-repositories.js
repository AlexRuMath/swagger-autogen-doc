let repositories = [];

module.exports = {
    add(api){
        repositories.push(api);
    },

    delete(api){
        repositories.slice(repositories.indexOf(api), 1);
    },

    getByIndex(index){
        return repositories[index];
    },

     getByPath(path){
        let result = repositories.filter(api => api.path === path);
        return result[0];
     }
};