'use strict';

var Post = require('../../models/post');
var User = require('../../models/user');

module.exports = function (router) {
    router.get('/new', function (req, res) {
        if(!req.isAuthenticated()) {
            res.redirect('/login');
            return;
        }

        var model = {
            messages: req.flash('error'),
            added: req.flash('added')
        };

        res.render('post/new', model);
    });

    router.post('/save', function (req, res) {
        if(!req.isAuthenticated()) {
            res.redirect('/login');
            return;
        }

        var user = req.user;

        var postTitle = req.body.title;
        var postBody = req.body.body;

        if (postTitle && postBody) {
            user.createPost({
                title: postTitle,
                body: postBody
            }).then(
                function() {
                    req.flash('added', true);
                    res.redirect('/');
                },
                function(err) {
                    req.flash('error', err);
                    res.redirect('/post/new');
                }
            );

            return;
        }

        req.flash('error', 'Title and body cannot be empty.');
        res.redirect('/post/new');
    });

    // Display one post
    router.get('/:id', function (req, res) {

        var postId = parseInt(req.params['id']);

        if (postId) {
            Post.findById(postId, {include: User}).then(function(post) {
                //console.log(post);
                var model = {
                    post: post
                };

                res.render('post/display', model);
            });
            return;
        }

        res.redirect('/');
    });
};
