const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')
const multer = require('multer');



app.use(express.json())

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmediaDB';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(console.log('connected to mongodb'))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'images');
    }, 
    filename:(req, file, cb) => {
        cb(null, req.body.name);
    }
});

const upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been uploaded!')
})


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);





app.listen("3001", ()=> {
    console.log('backend running on port 3001')
})