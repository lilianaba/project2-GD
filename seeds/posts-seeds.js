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
        title: 'Best People Ever!',
        post_content: 'This bar had the best people to interact with in the world',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 4,
        rating: 5
    },
    {
        title: 'Enjoyable!',
        post_content: 'Had a great time. Felt very safe.',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 5,
        rating: 5
    },
    {
        title: 'Loved it!',
        post_content: 'This bar has the best drinks!',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 6,
        rating: 4
    },
    {
        title: 'Loved it!',
        post_content: 'This bar has the best drinks!',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 1,
        rating: 5
    },
    {
        title: 'Got sooo drunk!',
        post_content: 'The bar staff kept serving me more and more :(',
        post_date: '2022-08-12',
        user_id: 3,
        bar_id: 1,
        rating: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;