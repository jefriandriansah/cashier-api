const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, saleController.createSale);
router.get('/', authMiddleware, saleController.getAllSales);
router.get('/:id', authMiddleware, saleController.getSaleById);
router.put('/:id', authMiddleware, saleController.updateSale);
router.delete('/:id', authMiddleware, saleController.deleteSale);

module.exports = router;
