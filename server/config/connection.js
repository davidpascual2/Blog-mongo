const { connection} = require('mongoose')
const mongoose = require('mongoose')

// const connectionString =
//     process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmediaDB';

// connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialmediaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 });



module.exports = connection;
