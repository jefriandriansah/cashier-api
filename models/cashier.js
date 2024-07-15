// models/cashier.js
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Cashier = sequelize.define('Cashier', {
    id_kasir: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_kasir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kota: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noHp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'cashiers',
    timestamps: false,
  });

  Cashier.beforeCreate(async (cashier, options) => {
    if (cashier.password) {
      const hashedPassword = await bcrypt.hash(cashier.password, 10);
      cashier.password = hashedPassword;
    }
  });

  return Cashier;
};
