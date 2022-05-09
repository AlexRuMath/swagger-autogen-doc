'use strict';

const chai = require("chai");
let should = chai.should();
const Parser = require("../swagger-autogen/src/parser/Parser");
const Option = require("../swagger-autogen/src/common/options");
const dir_routes = "./test/test-data";

describe("Testing parser", function () {
    describe("Parsing routes", function () {
        let options = new Option();

        it("Parsing URL", function () {
            let parser = new Parser(options);
            let [routes, schemes] = parser.parse(dir_routes);
            
            routes.forEach((array_rout, key) =>{
                array_rout.forEach((rout) =>{
                    rout.url.path.should.be.equal(key);
                })
            })
        });

        it("Parsing Method", function () {
            let parser = new Parser(options);
            let [routes, schemes] = parser.parse(dir_routes);
            let methods = [];
            
            routes.forEach((array_rout, key) =>{
                array_rout.forEach((rout) =>{
                    methods.push(rout.method);
                })
            })

            methods.should.have.contains("get", "post", "patch", "put", "delete");
        });        
    });

    describe("Parsing comment", function () {
        it("Parsing <swagger></swagger>", function(){
            let parser = new Parser(new Option());
            let [routes, schemes] = parser.parse(dir_routes);
            let comments = [];
            
            routes.forEach((array_rout, key) =>{
                array_rout.forEach((rout) =>{
                    if(rout.comment)
                        comments.push(rout.comment);
                })
            })

            comments.should.have.length(4);
        });
    });

    describe("Parsing schemes", function () {

    });

    describe("Parsing routes", function () {

    });

    describe("Parsing routes with comments", function () {

    })
});