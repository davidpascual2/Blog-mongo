const router = require('express').Router();

const {
    createPost,
    updatePost,
    deletePost,
    getSinglePost,
    getPosts,
} = require('../../controllers/postController')

router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id',deletePost);
router.get('/:id',getSinglePost);
router.get('/', getPosts);


module.exports = router;