'use strict';

var User = require('../models/user');

var UserLibrary = function() {
    return {
        serialize: function(user, done) {
            done(null, user.id);
        },
        deserialize: function(id, done) {
            User.findOne({where: {id: id}}).then(function(user) {
                done(null, user);
            });
        }
    };
};

module.exports = UserLibrary;