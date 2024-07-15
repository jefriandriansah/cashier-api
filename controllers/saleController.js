const { Sale } = require('../models');

exports.createSale = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.findAll();
    res.status(200).json(sales);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findByPk(req.params.id);
    if (!sale) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json(sale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSale = async (req, res) => {
  try {
    const [updated] = await Sale.update(req.body, { where: { id_penjualan: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json({ message: 'Sale updated' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSale = async (req, res) => {
  try {
    const deleted = await Sale.destroy({ where: { id_penjualan: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Sale not found' });
    res.status(200).json({ message: 'Sale deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
