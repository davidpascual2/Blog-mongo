const express = require('express');
const db = require('./config/connection');
const PORT = process.env.port || 3001;
const app = express();
// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const routes = require('./routes');
// const authRoute = require('./routes/auth');
// const userRoute = require('./routes/users')
// const postRoute = require('./routes/posts')
// const categoryRoute = require('./routes/categories');


const multer = require('multer');
const path = require('path'); //needed to uplaod images thru assets folder



app.use(express.json());
app.use('/images', express.static(path.join(__dirname, "/images"))) //makes assets folder public?



//===================================//

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

//===================================//

app.use(cors())
app.use(routes);
// app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);
// app.use('/api/posts', postRoute);
// app.use('/api/categories', categoryRoute);






//=======================//

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
});