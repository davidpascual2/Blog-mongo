const express = require('express');
const app = express();
// const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

app.use(express.json())

const connectionString =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmediaDB';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(console.log('connected to mongodb'))
.catch((err) => console.log(err));

app.use('/api/auth', authRoute);




app.listen("3001", ()=> {
    console.log('backend running on port 3001')
})