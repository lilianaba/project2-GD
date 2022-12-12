

const User = require('./User');
// const Bar = require('./Bar');
const Post = require('./Post');
const Comment = require('./Comment');

// Associations

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// Post.hasMany(Bar, {
//     foreignKey: 'rating'
// });

// Bar.belongsTo(Post, {
//     foreignKey: 'rating'
// });


module.exports = {User, Post, Comment};



