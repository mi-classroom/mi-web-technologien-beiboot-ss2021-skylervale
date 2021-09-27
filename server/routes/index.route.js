const express = require('express');
const router = express.Router({ mergeParams: true });
const treeController = require('../controllers/tree.controller');
const imageController = require('../controllers/image_metadata.controller');
const jsonController = require('../controllers/json_data.controller');
const downloadController = require('../controllers/download.controller');

router.route('/tree')
    .get(treeController.getTree);

router.route('/imgmetadata')
    .get(imageController.getImageMetadata);

router.route('/updateimgmetadata')
    .post(imageController.setImageMetadata);

router.route('/jsondata')
    .get(jsonController.getJsonData);

router.route('/download')
    .get(downloadController.zipFolder);

module.exports = router;
