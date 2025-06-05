const express = require('express');
const router = express.Router();
const tareaService = require('../services/tareaService');
const logger = require('../middleware/routeMiddleware');

router.use(logger); // Aplicar middleware
router.use('/tareas', tareaService);

module.exports = router;
