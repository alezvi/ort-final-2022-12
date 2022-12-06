'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {

    static associate(models) {
      
    }
  }
  Direccion.init({
    provincia: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    ruta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kilometro: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Direccion',
    tableName: 'Direccions'
  });
  return Direccion;
};