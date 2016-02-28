'use strict';

module.exports = function (router) {

    router.get('/', function (req, res) {
        res.render('user/register', {});
    });

    router.post('/', function (req, res) {

        var post = req.body;

        if (post.username && post.password) {
            var User = require('../../models/user');

            User.create({
                username: post.username,
                password: post.password
            }).then(
                function() {
                    res.render('user/registered', {registered: true});
                },
                function() {
                    res.render('user/registered', {registered: false});
                }
            );
        } else {
            res.render('user/registered', {registered: false});
        }
    });

};
