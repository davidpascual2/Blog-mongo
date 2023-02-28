const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use('/api', apiRoutes);

// router.use((req, res) => { //This serves as a fallback mechanism to catch any requests made to undefined routes and return a meaningful response to the client, rather than just returning a 404 error.
//     return res.send('Wrong route!!');
//   });

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;