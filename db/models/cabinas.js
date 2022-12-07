'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cabinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cabinas.belongsTo(models.Peajes,{foreignKey:'peajeId'})
    }
  }
  Cabinas.init({
    numero: {
      type: DataTypes.INTEGER
    },
    peajeId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Cabinas',
    tableName: 'cabinas'
  });
  return Cabinas;
};