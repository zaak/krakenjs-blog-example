'use strict';

var db = require('./database');

module.exports = function(app) {

    return {
        onconfig: function(config, next) {
            var dbConfig = config.get('databaseConfig');

            // @todo: Change this ugly bit
            db.initialize(dbConfig).then(
                function() {
                    console.log('Database ready');

                    var orm = require('../models/orm');

                    orm.registerModels().then(function() {

                        var passport = require('passport'),
                            auth = require('./auth'),
                            userLib = require('./user')();

                        app.on('middleware:after:session', function configPassport() {
                            //Tell passport to use our newly created local strategy for authentication
                            passport.use(auth.localStrategy());
                            //Give passport a way to serialize and deserialize a user. In this case, by the user's id.
                            passport.serializeUser(userLib.serialize);
                            passport.deserializeUser(userLib.deserialize);
                            app.use(passport.initialize());
                            app.use(passport.session());
                        });

                        next(null, config);
                    });
                },
                function(err) {
                    console.error('Error connecting to the database: ' + err);
                }
            );
        }
    };
};