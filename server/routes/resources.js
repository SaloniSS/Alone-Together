const express = require('express');
const router = express.Router();
const { getResource, addResource , getResourceByCategory} = require('../controllers/resource_controller');

router
    .route('/')
    .get(getResource)
    .post(addResource);

router
    .route('/:id')
    .get(getResourceByCategory)

module.exports = router;