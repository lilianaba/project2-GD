const User = require('./User');
const Bar = require('./Bar');
const Post = require('./Post');

// Associations

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Bar.hasMany(Post, {
    foreignKey: 'bar_id'
});

Post.belongsTo(Bar, {
    foreignKey: 'bar_id'
});    


module.exports = {User, Post, Bar};
