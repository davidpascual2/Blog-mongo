const router = require('express').Router();
// // const { Post, User } = require('../models')
// const User = require('../../models/User');
// const bcrypt = require('bcrypt');
// const Post = require('../../models/Posts');

const {
    updateUser,
    deleteUser,
    getSingleUser,
} = require('../../controllers/userController');

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getSingleUser);

// //UPDATE
// router.put('/:id', async (req, res) =>{
//     if(req.body.userId === req.params.id){
//         if(req.body.password){
//             const salt = await bcrypt.genSalt(10);
//             req.body.password = await bcrypt.hash(req.body.password, salt);
//         }
//         try{
//             const updatedUser = await User.findByIdAndUpdate(req.params.id,{
//                 $set: req.body,
//             }, {new: true} );
//             res.status(200).json(updatedUser)

//         } catch (err) {
//             console.log(err)
//             res.status(500).json(err) //someting wrong with mongodb or express server
//         }
//     } else {
//         res.status(401).json('you can only update your account!') //not allowd
//     }

// })

// //DELETE
// router.delete('/:id', async (req, res) =>{
//     if(req.body.userId === req.params.id){ //userId?
//         try {
//             const user = await User.findById(req.params.id);
//             try{
//                 await Post.deleteMany({username: user.username})
//                 await User.findByIdAndDelete(req.params.id)
//                 res.status(200).json("User has been deleted!");
                
//             } catch (err) {
//                 console.log(err)
//                 res.status(500).json(err) //someting wrong with mongodb or express server
//             }
//         } catch (err) {
//             res.status(404).json('user not found')
//         }
//     } else {
//         res.status(401).json('you can only delete your account!') //not allowd
//     }

// })

// //GET USER
// router.get('/:id', async (req, res)=>{
//     try{
//         const user = await User.findById(req.params.id);
//         const {password, ...others} = user._doc;
//         res.json(others)
//     } catch(err){
//         res.status(500).json(err)
//     }
// })



module.exports = router;