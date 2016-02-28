'use strict';

var Post = require('../models/post');

module.exports = function (router) {
    router.get('/', function (req, res) {
        var model =  {
            route: 'index',
            added: req.flash('added')
        };

        Post.findAll().then(function(posts) {
            model.posts = posts;

            res.render('index', model);
        });
    });
};
