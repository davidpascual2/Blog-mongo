const router = require('express').Router();
// const User = require('../../models/User');
// const bcrypt = require('bcrypt');

const {
    registerUser,
    loginUser,

} = require('../../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;