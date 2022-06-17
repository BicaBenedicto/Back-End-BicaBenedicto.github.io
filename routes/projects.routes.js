const express = require('express');
const projectsController = require('../controllers/projects.controller');
const projectsMiddleware = require('../middlewares/projects.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', projectsMiddleware.get, projectsController.get);

router.use(authMiddleware);

router.post('/', projectsMiddleware.create, projectsController.create);
router.put('/:id', projectsMiddleware.update, projectsController.update);
router.delete('/:id', projectsMiddleware.remove, projectsController.remove);

module.exports = router;
