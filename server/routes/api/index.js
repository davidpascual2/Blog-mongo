const router = require('express').Router();

const postRoutes = require('./postRoutes');
const authRoutes = require('./auth');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/posts', postRoutes);
router.use('/auth', authRoutes); //('/api/auth')??
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;