var database = require('../lib/database');

module.exports = {
	registerModels: function() {
		require('./user');

		return database.sequelize.sync();
	}
};
