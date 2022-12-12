// This is the setup for the '/api/' routes
const router = require('express').Router();
// This will grab and set up the route files as variables
const userRoutes = require('./user-routes');
const barRoutes = require('./bar-routes');
const postRoutes = require('./post-routes');
<<<<<<< HEAD
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/bars', barRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
=======
// we then use them here to set them up to Express router we will have one set up for every api routes
// router.use('/users', userRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/posts', postRoutes);
// router.use('/bar', barRoutes);
>>>>>>> 20b0f44d3ec312c091909ce5bd0742ca5ee63f99
// exports
module.exports = router;