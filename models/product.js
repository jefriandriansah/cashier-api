module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      id_barang: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_satuan: DataTypes.INTEGER,
      id_kategori: DataTypes.INTEGER,
      kodeBarang: DataTypes.INTEGER,
      namaBarang: DataTypes.STRING,
      hargaBeli: DataTypes.FLOAT,
      hargaJual: DataTypes.FLOAT,
      Stok: DataTypes.INTEGER,
      tanggalKadalursa: DataTypes.DATE
    }, {
      tableName: 'product',
      timestamps: false
    });
  };
  