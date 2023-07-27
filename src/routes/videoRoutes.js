const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.use('/', videoController);

module.exports = router;
