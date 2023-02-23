const router = require('express').Router();

const postRoutes = require('./postRoutes'); //ref postRoute
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes)




module.exports = router;