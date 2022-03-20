'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projetos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projetos.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    site: DataTypes.STRING,
    rep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projetos',
  });
  return Projetos;
};