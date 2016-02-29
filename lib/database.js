'use strict';

var Sequelize = require('sequelize');

var database = {
    initialize: function(config) {
        var sequelize = database.sequelize = new Sequelize(config.database, config.username, config.password, config);

        return sequelize.authenticate();
    }
};

module.exports = database;
