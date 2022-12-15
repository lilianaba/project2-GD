const router = require('express').Router();
const { User, Post, Comment, Bar } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
        
    const postData = await Post.findAll({ include : [User] });

    const posts = postData.map(post => post.get({ plain : true }));

    res.render('dashboard', {
        posts,
        logged_in: req.session.logged_in
    });

  } catch (error) {
    res.status(500).json({ message: "ERROR FROM DASH" });
  }
    
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
        
    const postData = await Post.findByPk({ include : [User] [Comment] });

    const post = postData.map(post => post.get({ plain : true }));

    res.render('dashboard', {
        post,
        logged_in: req.session.logged_in
    });

  } catch (error) {
    res.status(500).json({ message: "ERROR FROM DASH" });
  }
    
});

module.exports = router;
