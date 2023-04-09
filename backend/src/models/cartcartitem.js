'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartCartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartCartItem.init({
    cart_id: DataTypes.STRING,
    cartItem_Id: DataTypes.STRING,
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CartCartItem',
  });
  return CartCartItem;
};