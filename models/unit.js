module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Unit', {
      id_satuan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      satuanBarang: DataTypes.FLOAT
    }, {
      tableName: 'unit',
      timestamps: false
    });
  };
  