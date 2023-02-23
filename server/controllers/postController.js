const {Post} = require('../models');

module.exports = {

    //CREATE POST
    createPost: async (req, res) =>{
        console.log(req.body)
        const newPost = new Post(req.body);
        try{
            const savedPost = await newPost.save();
            res.status(200).json(savedPost)
        } catch(err){
            res.status(500).json(err)
        }

    },

    //UPDATE POST
    updatePost: async (req, res) =>{
        try{
            const post =  await Post.findById(req.params.id);
            if(post.username === req.body.username){
                try{
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set: req.body,
                    }, {new: true});
                    res.status(200).json(updatedPost);
                } catch(err) {
                    res.status(500).json(err);
                }  
            } else {
                res.status(401).json('you can only update your post')
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    //DELETE POST
    deletePost: async (req, res) =>{
        try{
            const post =  await Post.findById(req.params.id);
            if(post.username === req.body.username){
                try{
                    await post.delete()
                    res.status(200).json('post has been deleted!');
                } catch(err) {
                    res.status(500).json(err);
                }  
            } else {
                res.status(401).json('you can only delete your post')
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    },

    //GET Post
    getSinglePost: async (req, res)=>{
        try{
            const post = await Post.findById(req.params.id);
            res.status(200).json(post)
        } catch(err){
            res.status(500).json(err)
        }
    },

    //GET ALL Posts
    // router.get('/', async (req, res)=>{  //can query by adding "/?user='john' " to url
    //     const username = req.query.user;
    //     const catName = req.query.cat;
    //     try{
    //         let posts;
    //         if(username){
    //             posts = await Post.find({username: username })
    //         } else if (catName){
    //             posts = await Post.find({categories:{ //look in cat array
    //                 $in:[catName], //if inside catagoryname array
    //             }
    //             });
    //         } else { //if no username or cat name fetch all posts
    //             posts = await Post.find();
    //         }
    //         res.status(200).json(posts)
    //     } catch(err){
    //         res.status(500).json(err)
    //     }
    // });
    getPosts: async (req, res)=>{
        const username = req.query.user;
        const catName = req.query.cat;
        try{
            let posts;
            if(username){
                posts = await Post.find({username: username }).sort({ createdAt: -1 });
            } else if (catName){
                posts = await Post.find({categories:{
                    $in:[catName],
                }
                }).sort({ createdAt: -1 });
            } else {
                posts = await Post.find().sort({ createdAt: -1 });
            }
            res.status(200).json(posts)
        } catch(err){
            res.status(500).json(err)
        }
    },

}