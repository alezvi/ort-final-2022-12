'use strict';
const {
  Model,Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoVehiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TipoVehiculo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    descripcion: {
      allowNull: false,
      type: Sequelize.STRING
    },

  }, {
    sequelize,
    modelName: 'TipoVehiculo',
    tableName: 'TipoVehiculos',
  });
  return TipoVehiculo;
};