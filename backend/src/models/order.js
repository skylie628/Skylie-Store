'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    cart_id: DataTypes.STRING,
    status: DataTypes.STRING,
    total_price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};