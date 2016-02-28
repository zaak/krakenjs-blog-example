var Sequelize = require('sequelize');
var database = require('../lib/database');

var User = database.sequelize.define('User', {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

return User;