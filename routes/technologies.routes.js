const express = require('express');
const technologiesController = require('../controllers/technologies.controller');
const technologiesMiddleware = require('../middlewares/technologies.middleware');

const router = express.Router();

router.get('/', technologiesMiddleware.get, technologiesController.get);
router.post('/', technologiesMiddleware.create, technologiesController.create);
router.put('/:id', technologiesMiddleware.update, technologiesController.update);
router.delete('/:id', technologiesMiddleware.remove, technologiesController.remove);

module.exports = router;
