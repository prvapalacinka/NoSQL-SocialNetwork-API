const router = require('express').Router();
const userRoutes = require('../api/userRoutes');
const thoughtRoutes = require('../api/thoughtRoutes');
const { Router } = require('express');
router.use('/user', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
