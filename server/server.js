const express = require('express');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();
// const mongoose = require('mongoose');
const cors = require('cors')
// const path = require('path'); //not necessary to npm i path
const routes = require('./routes');
app.use(express.json());
app.use(cors())

//=======================//

// if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

app.use(routes);

//=======================//

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
});