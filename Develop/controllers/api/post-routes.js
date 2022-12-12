// gets the models
const { User, Post, Comment, Bar } = require('../../models');
// sets up the Express Router
const router = require('express').Router();
// this will connect in the helpers utils - for them to only be able to acces once logged in
const withAuth = require('../../utils/auth');
//=======================================================================
// To create a new post(review) the user will use the method POST
router.post('/review', withAuth, async (req, res) => {

    try {

    const barData = await Bar.findAll({ where: { name : req.body.name } });
    console.log(req.body + "Review has been triggered from the user to create a new Review in postRoutes");

        if (barData) {
        
            const postData = await Post.create({
            title: req.body.title,
            post_content: req.body.post_content,
            user_id: req.session.user_id,
            bar_id: req.body.name,
            rating: req.body.rating,
            });
    
            // below will redirect you to the dashboard after the post has been created
            res.redirect('/api/dashboard')
    
        }

    }  catch(err) {
        console.log(err);
        res.status(500).json(err);
    };

});

//=======================================================================
// To delete a post(review) the user will use the method DELETE and use the params.id to select
router.delete('/:id', withAuth, async (req, res) => {
console.log("DELETING A REVIEW")
 try {
const postData = await Post.destroy({
where: req.params.id,
},
)

if (!postData) {
console.log("There is no review with this ID");
// Respond with 404 if the ID requests by the user doesnt enter a valid ID
// The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource
res.status(404).json({message: 'No review found with this ID'});
return;
}
//The HTTP 200 OK success status response code indicates that the request has succeeded.
res.status(200).json(postData)
res.redirect('/api/dashboard')
} catch (err) {
console.log(err);
// The HTTP status code 500 is a generic error response.
res.status(500).json(err);
}})

module.exports = router;