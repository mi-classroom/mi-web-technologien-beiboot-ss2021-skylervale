const express = require('express');
const router = express.Router({ mergeParams: true });
const treeController = require('../controllers/tree.controller');
const imageController = require('../controllers/image_metadata.controller');

router.route('/tree')
    .get(treeController.getTree)

router.route('/imgmetadata')
    .get(imageController.getImageMetadata)

module.exports = router;
