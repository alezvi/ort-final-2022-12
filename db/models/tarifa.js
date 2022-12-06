'use strict';
const TipoTarifa = require('./tipotarifa');
const TipoVehiculo = require('./tipovehiculo');
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarifa extends Model {
    static associate(models) {
      Tarifa.belongsTo(models.TipoVehiculo, { as: 'TipoVehiculo', foreignKey: 'tipoVehiculoId' });
      Tarifa.belongsTo(models.TipoTarifa, { as: 'TipoTarifa', foreignKey: 'tipoTarifaId' });
    }
  }
  
  Tarifa.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    tipoVehiculoId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    tipoTarifaId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    valor: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    vigente: {
      allowNull: false,
      type: Sequelize.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Tarifa',
    tableName: 'Tarifas',
  });
  return Tarifa;
};