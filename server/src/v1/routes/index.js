let express = require('express');
let router = express.Router();



router.use('/', require('./users'))

module.exports = router;
