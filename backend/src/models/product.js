'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    lasted: DataTypes.BOOLEAN,
    best_sale: DataTypes.BOOLEAN,
    color: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    collection_id: DataTypes.STRING,
    productOption_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};