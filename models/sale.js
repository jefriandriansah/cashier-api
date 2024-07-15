module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Sale', {
      id_penjualan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_barang: DataTypes.INTEGER,
      id_pengguna: DataTypes.INTEGER,
      id_pelanggan: DataTypes.INTEGER,
      faktur: DataTypes.INTEGER,
      harga: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      namaBarang: DataTypes.STRING,
      kodeBarang: DataTypes.INTEGER,
      total: DataTypes.FLOAT
    }, {
      tableName: 'sale',
      timestamps: false
    });
  };
  