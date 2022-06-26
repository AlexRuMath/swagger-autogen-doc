const fs = require('fs');
const findRouts = require("./utils/find-rout");

class Parser {
    constructor(options) {
        this.options = options;
    }

    parse(dir) {
        let res = new Map();
        let routs = this.readAllFilesFromFolder(dir);
        for (let i = 0; i < routs.length; i++) {
            let rout = routs[i];
            let path = rout.url.path;
            if (!res.get(path)) {
                res.set(path, []);
            }
            res.get(path).push(rout);
        }

        return res;
    }

    readAllFilesFromFolder(dir) {
        let results = [];
        let curDir = dir.split('/').pop();

        if (curDir.match('node_modules')) return results;

        let files = fs.readdirSync(dir);
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            file = dir + '/' + file;
            let stat = fs.statSync(file);
            if (stat && stat.isDirectory()) {
                results = results.concat(this.readAllFilesFromFolder(file));
            } else {
                if (!file.match(/.js/) || file.match(/.json/)) continue;

                let text = fs.readFileSync(file, 'utf-8');
                let routs = findRouts(text, file, this.options);

                if (routs.length === 0) continue;
                results = results.concat(routs);
            }
        }
        return results;
    }
}

module.exports = Parser;