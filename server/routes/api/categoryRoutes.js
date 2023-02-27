const router = require('express').Router();

const {
    createCat,
    getCats,
} = require('../../controllers/categoryController');

router.post('/', createCat);
router.get('/', getCats);


module.exports = router;