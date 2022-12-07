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
      // define association here
      Peaje.hasMany(models.Cabina, {foreignKey: "cabinaId"})
    }
  }
  Peaje.init({
    provincia: {
      type: DataTypes.STRING,
      allowNull:false
    },
    nroRuta: {
      type:DataTypes.INTEGER,
    }, 
    km:{
      type:DataTypes.INTEGER
    } 
  }, {
    sequelize,
    modelName: 'Peaje',
    tableName: 'Peajes'
  });
  return Peaje;
};