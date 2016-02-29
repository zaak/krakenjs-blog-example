'use strict';

module.exports = function(router) {
    /**
     * Logout the user.
     */
    router.get('/', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};