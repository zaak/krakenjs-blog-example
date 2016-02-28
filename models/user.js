var Sequelize = require('sequelize');
var database = require('../lib/database');
var bcrypt = require('bcrypt');

var User = database.sequelize.define('User', {
	username: {type: Sequelize.STRING, allowNull: false, unique: true},
	password: {
		type: Sequelize.STRING,
		set:  function(v) {
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(v, salt);

			this.setDataValue('password', hash);
		}
	}
}, {
	instanceMethods: {
		passwordMatches: function(plainTextPass) {
			var user = this;
			return bcrypt.compareSync(plainTextPass, user.password);
		}
	}
});

module.exports = User;
