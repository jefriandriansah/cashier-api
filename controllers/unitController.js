const { Unit } = require('../models');

exports.createUnit = async (req, res) => {
  try {
    const unit = await Unit.create(req.body);
    res.status(201).json(unit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUnits = async (req, res) => {
  try {
    const units = await Unit.findAll();
    res.status(200).json(units);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUnitById = async (req, res) => {
  try {
    const unit = await Unit.findByPk(req.params.id);
    if (!unit) return res.status(404).json({ message: 'Unit not found' });
    res.status(200).json(unit);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUnit = async (req, res) => {
  try {
    const [updated] = await Unit.update(req.body, { where: { id_satuan: req.params.id } });
    if (!updated) return res.status(404).json({ message: 'Unit not found' });
    res.status(200).json({ message: 'Unit updated' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUnit = async (req, res) => {
  try {
    const deleted = await Unit.destroy({ where: { id_satuan: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Unit not found' });
    res.status(200).json({ message: 'Unit deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
