const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, unitController.createUnit);
router.get('/', authMiddleware, unitController.getAllUnits);
router.get('/:id', authMiddleware, unitController.getUnitById);
router.put('/:id', authMiddleware, unitController.updateUnit);
router.delete('/:id', authMiddleware, unitController.deleteUnit);

module.exports = router;
