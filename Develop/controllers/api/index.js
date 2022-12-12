// This is the setup for the '/api/' routes
const router = require('express').Router();
// This will grab and set up the route files as variables
const userRoutes = require('./user-routes');
const barRoutes = require('./bar-routes');
// NEED TO-DO CREATE FILE postRoutes
const postRoutes = require('./post-routes');
// we then use them here to set them up to Express router we will have one set up for every api routes
// router.use('/users', userRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/posts', postRoutes);
// router.use('/bar', barRoutes);
// exports
module.exports = router;