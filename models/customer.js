module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Customer', {
      id_pelanggan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_pelanggan: DataTypes.STRING,
      alamat: DataTypes.STRING,
      kota: DataTypes.STRING,
      noHp: DataTypes.INTEGER,
      email: DataTypes.STRING
    }, {
      tableName: 'customer',
      timestamps: false
    });
  };
  