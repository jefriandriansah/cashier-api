const Sequelize = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const Customer = require('./customer')(sequelize, Sequelize.DataTypes);
const Cashier = require('./cashier')(sequelize, Sequelize.DataTypes);
const Product = require('./product')(sequelize, Sequelize.DataTypes);
const Sale = require('./sale')(sequelize, Sequelize.DataTypes);
const Purchase = require('./purchase')(sequelize, Sequelize.DataTypes);
const Unit = require('./unit')(sequelize, Sequelize.DataTypes);
const Category = require('./category')(sequelize, Sequelize.DataTypes);

Customer.hasMany(Sale, { foreignKey: 'id_pelanggan' });
Cashier.hasMany(Sale, { foreignKey: 'id_kasir' });
Cashier.hasMany(Purchase, { foreignKey: 'id_kasir' });
Product.hasMany(Sale, { foreignKey: 'id_barang' });
Product.hasMany(Purchase, { foreignKey: 'id_barang' });
Unit.hasMany(Product, { foreignKey: 'id_satuan' });
Category.hasMany(Product, { foreignKey: 'id_kategori' });

module.exports = {
  Customer,
  Cashier,
  Product,
  Sale,
  Purchase,
  Unit,
  Category,
  sequelize
};
