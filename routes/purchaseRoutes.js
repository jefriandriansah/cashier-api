const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, purchaseController.createPurchase);
router.get('/', authMiddleware, purchaseController.getAllPurchases);
router.get('/:id', authMiddleware, purchaseController.getPurchaseById);
router.put('/:id', authMiddleware, purchaseController.updatePurchase);
router.delete('/:id', authMiddleware, purchaseController.deletePurchase);

module.exports = router;
