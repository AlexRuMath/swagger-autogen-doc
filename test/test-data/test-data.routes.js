var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

module.exports = (router) => {

    /*
    <swagger>
        <summary>Short description</summary>
    </swagger>
    */
    router.get('/index', function (req, res) {
    });


    router.delete('/index', function (req, res) {
    });

    //
    //<swagger>
    //    <summary>Short description</summary>
    //</swagger>
    router.path('/index', function (req, res) {
    });

    /*
    <swagger>
        <summary>Short description</summary>
    </swagger>
    */
    router.put('/index', function (req, res) {
    });

    /*
    <swagger>
    </swagger>
    */
    router.post('/index', function (req, res) {
    });

    
};