const { Cashier } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nama_kasir, alamat, kota, noHp, email, password } = req.body;
    const cashier = await Cashier.create({ nama_kasir, alamat, kota, noHp, email, password });
    res.status(201).json(cashier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const cashier = await Cashier.findOne({ where: { email } });
    if (!cashier || !await bcrypt.compare(password, cashier.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: cashier.id_kasir }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
