'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Empleados.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    fechaIngreso: DataTypes.DATE,
    peajeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Empleados',
  });
  return Empleados;
};