const express = require('express');
const router = express.Router();
const { getResources , addResources } = require('../controllers/resource_controller');

router
    .route('/')
    .get(getResources)
    .post(addResources);

module.exports = router;