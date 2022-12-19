const router = require('express').Router();

const userRoutes = require('./user-routes');
const barRoutes = require('./bar-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/bar', barRoutes);
router.use('/posts', postRoutes);

module.exports = router;