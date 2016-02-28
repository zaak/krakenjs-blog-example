'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        
        model.route = 'index';
        res.render('index', model);
        
        
    });

};
