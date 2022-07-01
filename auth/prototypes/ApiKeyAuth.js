class ApiKeyAuth {
    constructor(){
        this.name = "X-API-KEY";
        this.type = "apiKey";
        this.in = "header";
    }

    set Name(name){
        this.name = name;
    }

    get Name(){
        return this.name;
    }
}

module.exports = ApiKeyAuth;