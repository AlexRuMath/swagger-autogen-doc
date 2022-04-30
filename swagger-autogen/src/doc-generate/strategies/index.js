const fs = require("fs");
const camelCase = require('camelcase');
const path = require('path');

const files = fs.readdirSync(`${__dirname}`);
files.forEach(file => {
    if(file === "index.js") return;

    const name = camelCase(path.basename(file).split('.')[0].split('-')[1]);
    exports[name] = require("./" + file);
});