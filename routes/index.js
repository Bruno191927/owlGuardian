const express = require('express');
const router = express.Router();
const auth = require('../components/auth/routes');
const incidents = require('../components/incidents/routes');
router.use('/auth',auth);
router.use('/incidents',incidents);
module.exports = router;