const { Apollo } = require('apollo-server');
const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
