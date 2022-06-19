const fs = require("fs");
const camelCase = require('camelcase');
const path = require('path');

const files = fs.readdirSync(`${__dirname}`);
files.forEach(file => {
    if(file === "index.js") return;

    const name = path.basename(file).split('.')[0];
    exports[name] = require("./" + file);
});