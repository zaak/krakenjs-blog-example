'use strict';

var db = require('./database');

module.exports = function(app) {
	return {
		onconfig: function(config, next) {
			var dbConfig = config.get('databaseConfig');
			db.initialize(dbConfig).then(
				function() {
					console.log('Database ready');

					var orm = require('../models/orm');
					orm.registerModels().then(function() {
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