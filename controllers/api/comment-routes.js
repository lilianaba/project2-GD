// const { Comment } = require('../../models/Comment');

// const router = require('express').Router();

// const withAuth = require('../../utils/auth');

// // a user if signed in will be able to put a comment 
// router.post('/', withAuth, async (req, res) => {
    
//     try {
//         if (req.session) {
//             const commentData =  await Comment.create({
//                 comment_content: req.body.comment_content,
//                 user_id: req.session.user_id,
//                 post_id: req.body.post_id,
                
//             });
//             res.json(commentData);
//         };
//     } catch(err) {
//         console.log(err);
//         res.status(400).json(err);
//         };
// });


// module.exports = router;

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        if (req.session) {
            const commentData =  await Comment.create({
                comment_content: req.body.comment_content,
                user_id: req.session.user_id,
                post_id: req.body.post_id,
            });
            res.json(commentData);
        };
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, (req, res) => {
    
})

module.exports = router;
