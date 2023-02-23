const router = require('express').Router();
// const Category = require('../../models/Category');
// const Categories = require('../../models/Category');


const {
    createCat,
    getCats,
} = require('../../controllers/categoryController');

router.post('/', createCat);
router.get('/', getCats);


// router.post('/', async (req, res)=>{
//     const newCat = new Category(req.body);
//     try{
//         const savedCat = await newCat.save()
//         res.status(200).json(savedCat);

//     } catch(err){
//         res.status(500).json(err)
//     }
// });

// //GET ALL Cats
// router.get('/', async (req, res)=>{
    
//     try{
//         const cats = await Category.find();
//         res.status(200).json(cats);

//     } catch(err){
//         res.status(500).json(err)
//     }
// });




module.exports = router;