module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Category', {
      id_kategori: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Barang: DataTypes.FLOAT
    }, {
      tableName: 'Category',
      timestamps: false
    });
  };
  