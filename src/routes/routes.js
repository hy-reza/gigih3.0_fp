const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const productController = require('../controllers/productController');
const commentController = require('../controllers/commentController');

router.use('/videos', videoController);
router.use('/products', productController);
router.use('/comments', commentController);

module.exports = router;
