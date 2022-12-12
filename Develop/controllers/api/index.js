// This is the setup for the '/api/' routes
const router = require('express').Router();
// This will grab and set up the route files as variables
const userRoutes = require('./user-routes');
const barRoutes = require('./bar-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/bars', barRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
// exports
module.exports = router;