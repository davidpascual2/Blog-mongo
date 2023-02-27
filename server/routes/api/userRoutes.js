const router = require('express').Router();

const {
    updateUser,
    deleteUser,
    getSingleUser,
} = require('../../controllers/userController')

router.put('/:id', updateUser );
router.delete('/:id', deleteUser );
router.get('/:id', getSingleUser);


module.exports = router;