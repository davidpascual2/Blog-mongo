const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories');
const multer = require('multer');
const path = require('path'); //needed to uplaod images thru assets folder



app.use(express.json());
app.use('/images', express.static(path.join(__dirname, "/images"))) //makes assets folder public?

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmediaDB';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
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

app.use(cors())
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);





app.listen("3001", ()=> {
    console.log('backend running on port 3001')
})