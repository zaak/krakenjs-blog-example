var database = require('../lib/database');

module.exports = {
    registerModels: function() {
        var User = require('./user');
        var Post = require('./post');

        Post.belongsTo(User);
        User.hasMany(Post, {as: 'Posts'});

        return database.sequelize.sync();
    }
};
