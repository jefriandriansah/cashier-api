module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Purchase', {
      id_pembelian: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_barang: DataTypes.INTEGER,
      id_kasir: DataTypes.INTEGER,
      faktur: DataTypes.INTEGER,
      harga: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      namaBarang: DataTypes.STRING,
      kodeBarang: DataTypes.INTEGER,
      total: DataTypes.FLOAT
    }, {
      tableName: 'purchase',
      timestamps: false
    });
  };
  