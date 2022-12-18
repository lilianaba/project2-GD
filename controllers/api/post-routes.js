const router = require('express').Router();
const { User, Post, Comment, Bar } = require('../../models');
const withAuth = require('../../utils/auth');


// gets all review posts
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({})
        res.status(200).json(postData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

// Makes a review 
router.post("/", withAuth, async (req, res) => {
    try {
        // console.log("creating");
        // const postData = await Post.create({
        //     title: req.body.title,
        //     post_content: req.body.post_content,
        //     rating: req.session.rating
        // },
        //     res.status(200).json(postData))

            const newPosts = await Post.create({
                ...req.body,
                title: req.body.title,
                post_content: req.body.post_content,
                rating: req.body.rating,
                bar_id: req.session.bar_id,
                user_id: req.session.user_id,
                
            });
            res.json(newPosts);
            console.log(newPosts);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
   
    try {
      const post = await Post.update(
      {
        ...req.body,
        title: req.body.title,
        post_content: req.body.post_content,
        rating: req.body.rating,
        bar_id: req.session.bar_id,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      });
      // TODO: If the database is updated successfully, what happens to the updated data below?
      console.log(post);
      res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
      };
  });
  




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