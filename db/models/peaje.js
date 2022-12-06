'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Peaje.belongsTo(models.Direccion)
    }
  }
  Peaje.init({
    direccionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Peaje',
    tableName: 'Peajes'
  });
  return Peaje;
};