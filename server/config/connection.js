const {connect, connection} = require('mongoose')

const connectionString =
    process.env.MONGODB_URI || 'mongodb+srv://davidchirp:socialmediapassword@project-cluster.8vrin1g.mongodb.net/?retryWrites=true&w=majority';

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


module.exports = connection;
