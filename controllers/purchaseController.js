const { Purchase } = require('../models');

exports.createPurchase = async (req, res) => {
  try {
    const purchase = await Purchase.create(req.body);
    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.findAll();
    res.status(200).json(purchases);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findByPk(req.params.id);
    if (!purchase) return res.status(404).json({ message: 'Purchase not found' });
    res.status(200).json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePurchase = async (req, res) => {
  try {
    const [updated] = await Purchase.update(req.body, { where: { id_pembelian: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Purchase not found' });
    res.status(200).json({ message: 'Purchase updated' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePurchase = async (req, res) => {
  try {
    const deleted = await Purchase.destroy({ where: { id_pembelian: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Purchase not found' });
    res.status(200).json({ message: 'Purchase deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
