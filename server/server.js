const express = require('express');
const db = require('./config/connection');
const PORT = process.env.port || 3001;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

app.use(express.json());
app.use(cors())
app.use(routes);

//=======================//

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`)
});