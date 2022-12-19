const { Post } = require('../models');

const postData = [
    {
        title: 'Best Cocktails Ever!',
        post_content: 'This bar had the best cocktails in the world, you have to try them!',
        post_date: '2022-08-12',
        user_id: 1,
        bar_id: 1,
        rating: 3.5
    },
    {
        title: 'Best Beer Ever!',
        post_content: 'This bar had the best beers in the world, you have to try them!',
        post_date: '2022-08-12',
        user_id: 2,
        bar_id: 2,
        rating: 4
    },
    {
        title: 'Best Wine Ever!',
        post_content: 'This bar had the best wine in the world, you have to try them!',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 3,
        rating: 2
    },
    {
        title: 'Best Wine Ever!',
        post_content: 'This bar had the best wine in the world, you have to try them!',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 4,
        rating: 2
    },
    {
        title: 'Best Wine Ever!',
        post_content: 'This bar had the best wine in the world, you have to try them!',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 5,
        rating: 2
    },
    {
        title: 'Best Wine Ever!',
        post_content: 'This bar had the best wine in the world, you have to try them!',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 3,
        rating: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;