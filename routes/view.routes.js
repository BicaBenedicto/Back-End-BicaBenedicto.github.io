const express = require('express');
const viewController = require('../controllers/view.controller');

const router = express.Router();

router.get('/:filename', viewController.view);
// router.post('/', viewMiddleware.create, viewController.create);

module.exports = router;
