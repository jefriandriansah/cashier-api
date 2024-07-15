const {Customer} = require('../models'); // Pastikan mengimpor model Customer dengan benar

exports.createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body); // Gunakan Customer.create untuk membuat entri baru
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll(); // Gunakan Customer.findAll untuk mengambil semua pelanggan
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id); // Gunakan Customer.findByPk untuk mencari pelanggan berdasarkan primary key
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const [updated] = await Customer.update(req.body, { where: { id_pelanggan: req.params.id } }); // Gunakan Customer.update untuk memperbarui pelanggan
    if (!updated) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json({ message: 'Customer updated' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const deleted = await Customer.destroy({ where: { id_pelanggan: req.params.id } }); // Gunakan Customer.destroy untuk menghapus pelanggan
    if (!deleted) return res.status(404).json({ message: 'Customer not found' });
    res.status(200).json({ message: 'Customer deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
