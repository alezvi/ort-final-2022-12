'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cabina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cabina.init({
    direccion: DataTypes.STRING,
    provincia: DataTypes.STRING,
    nRuta: DataTypes.INTEGER,
    kilometro: DataTypes.INTEGER,
    numeroCabina: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cabina',
  });
  return Cabina;
};