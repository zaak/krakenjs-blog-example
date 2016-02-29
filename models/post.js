var Sequelize = require('sequelize');
var database = require('../lib/database');

var Post = database.sequelize.define('Post', {
    title: {type: Sequelize.STRING, allowNull: false},
    body: {type: Sequelize.TEXT, allowNull: false}
});

module.exports = Post;
