
class Path
{
    constructor(path, data_path)
    {
        this.name = path
        this.data = this.parseData(data_path)
    }

    parseData(data)
    {
        let result = {};

        data.forEach((rout) =>{
            result[rout.method] = {} 
        })
    }
}

module.exports = Path;