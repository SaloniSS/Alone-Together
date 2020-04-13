const express = require('express');
const router = express.Router();
const { getResource, addResource } = require('../controllers/resource_controller');

router
    .route('/')
    .get(getResource)
    .post(addResource);

module.exports = router;