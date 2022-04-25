const Parser = require('./src/parser/Parser');
const BuilderDocuments = require('./src/generate-doc/BuilderDocuments');

let parser = new Parser();
let res_1 = parser.parse('/home/alex/Project/NodeJs/swagger-autogen-doc/Express');
let res_2 = parser.parse('/home/alex/Project/NodeJs/poker-game-instance/');
let a = res_1.get('/index');