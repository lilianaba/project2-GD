const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// gets all review posts
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({})
        res.status(200).json(postData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// Makes a review 
router.post("/", withAuth, async (req, res) => {
    try {
        console.log("creating");
        const postData = await Post.create({
            title: req.body.title,
            post_content: req.body.post_content,
            rating: req.session.rating
        },
            res.status(200).json(postData))

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// // Update a post -- DONT USE
// router.put("/:id", withAuth, async (req, res) => {
// try {

//  const postData = await Post.update({
//             title: req.body.title,
//             post_content: req.body.post_content,
//         }, {
//             where: {
//                 id: req.params.id,
//             },
//         })

//             if (!postData) {
//                 res.status(404).json({
//                     message: "No post found with this id"
//                 });
//                 return;
//             }
//             res.json(postData);

//          } catch (err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     });



router.delete("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (!postData) {
            res.status(404).json({ message: "No post with that ID found with this id" });
            return;
        }
        res.json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;