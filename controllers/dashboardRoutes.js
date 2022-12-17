const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment, Bar } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
        
    const barData = await Bar.findAll({
      include: [{ model: Post }],
      attributes: { 
        include: [
          [
            sequelize.literal(
              '(select avg(rating) from post where post.bar_id = bar.id)'
            ),
            'ratingAvg',
          ],
        ],
      },
    });

    const bars = barData.map(bar => bar.get({ plain : true }));

    console.log(bars);
    res.render('dashboard', {
        bars,
        logged_in: req.session.logged_in
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
    
});

// router.get('/bar/:id', withAuth, async (req, res) => {
//   try {
        
//     const postData = await Post.find(req.params.bar_id, {
//       attributes: { 
//         include: [
//           [
//             sequelize.literal(
//               '(select * from post where post.bar_id = bar.id)'
//             ),
//             'ratingAvg',
//           ],
//         ],
//       },
  
//    });

//     const post = barData.get(post => post.get({ plain : true }));

//     console.log(post);

//     res.render('barposts', {
//         bar,
//         logged_in: req.session.logged_in
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json(error);
//   }
    
// });



router.get('/bar/:id', withAuth, async (req, res) => {
  try {
    
    const barData = await Bar.findOne({where:{id:req.params.id}});
    const bar = barData.get({ plain : true });

    const postData = await Post.findAll({where:{bar_id:req.params.id}});

    const posts = postData.map(post => post.get({ plain : true }));
    console.log(bar);
    res.render('barposts', {
        posts,
        bar,
        logged_in: req.session.logged_in
    });

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
    
});



router.post('/bar/:id',withAuth, async (req, res) => {
  try {
    const newpost = await Post.create({

      title: req.body.post_title,
      content: req.body.description,
      rating: req.body.rating,
      
    });
    console.log(newpost);
    res.status(200).json(newpost);
  } catch (err) {
    res.status(400).json(err);
  }
});




// router.get('/', withAuth, async (req, res) => {
//   try {
        
//     const postData = await Post.findAll({ include : [User] });

//     const posts = postData.map(post => post.get({ plain : true }));

//     res.render('dashboard', {
//         posts,
//         logged_in: req.session.logged_in
//     });

//   } catch (error) {
//     res.status(500).json({ message: "ERROR FROM DASH" });
//   }
    
// });

// router.get('/post/:id', withAuth, async (req, res) => {
//   try {
        
//     const postData = await Post.findByPk({ include : [User] [Comment] });

//     const post = postData.map(post => post.get({ plain : true }));

//     res.render('dashboard', {
//         post,
//         logged_in: req.session.logged_in
//     });

//   } catch (error) {
//     res.status(500).json({ message: "ERROR FROM DASH" });
//   }
    
// });

module.exports = router;
