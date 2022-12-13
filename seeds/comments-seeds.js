const { Comment } = require('../models')

const commentData = [
{
    title: "Local Delight",
    comment_content: "The venue is delivering a full service bar, fronted by ten taps pouring a great range of Adelaide brewed beers, plus a huge selection of locally sourced gin.",
    user_id: 1,
    post_id: 1
},
{
    title: "Star Staff",
    comment_content: "This is a bar you want to be a regular at the customer service here is outstanding",
    user_id: 2,
    post_id: 2
},
{
    title: "Pretty Average",
    comment_content: "For a multi-award-winning cocktail bar, I found the drinks to be stretching to be above average and the service was definately not convincing me to return.",
    user_id: 3,
    post_id: 3
},
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 
