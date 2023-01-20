// directory for routes under /api

const router = require('express').Router();
const blogpostRoute = require('./blogpostRoute');
const dashboardRoute = require('./dashboardRoute');

router.use('/post', blogpostRoute);
router.use('/dashboard', dashboardRoute);

module.exports = router;
