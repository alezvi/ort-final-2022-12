'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peajes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Peajes.init({
    direccion: DataTypes.STRING,
    numero: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Peajes',
  });
  return Peajes;
};