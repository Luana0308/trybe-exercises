'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books_exerciciol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  books_exerciciol.init({
    authoro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'books_exerciciol',
  });
  return books_exerciciol;
};