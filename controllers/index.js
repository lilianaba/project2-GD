const router = require('express').Router();

const apiRoutes = require('./api');
// const ageRoutes = require('./ageRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const homepageRoutes = require('./homepageRoutes');
// const barpostRoutes = require('./barpostRoutes');
// const error = require('./error');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
// router.use('/age', ageRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/dashboard', barpostdRoutes);
// router.use('/error', error);

// router.use((req, res) => {
//     res.status(404).end();
// });

module.exports = router;