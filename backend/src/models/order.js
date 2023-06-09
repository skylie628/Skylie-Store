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
    
      Order.belongsTo(models.ShippingAddress,{foreignKey:'shipping_address_id',targetKey:'id',as:'shippingAddress'});
      Order.belongsTo(models.Cart,{foreignKey:'cart_id',as:'cart'});
      Order.hasMany(models.OrderItem,{foreignKey:'order_id',as:'orderItem'})
    }
  }
  Order.init({
    status: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    cart_id: DataTypes.STRING,
    shipping_address_id: DataTypes.STRING,
    shipping_fee:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};