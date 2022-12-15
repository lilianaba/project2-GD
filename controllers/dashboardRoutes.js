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
    res.status(500).json({ message: 'Error from dashbaord get' });
  }
    
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
