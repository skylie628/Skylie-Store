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
      Order.belongsTo(models.Voucher,{foreignKey:'voucherDiscount',targetKey:'code',as:'discount'});
      Order.belongsTo(models.Voucher,{foreignKey:'voucherFreeship',targetKey:'code',as:'freeship'});
      Order.belongsTo(models.Account,{foreignKey:'account_id',targetKey:'id',as:'account'});
      Order.belongsTo(models.ShippingAddress,{foreignKey:'shipping_address_id',targetKey:'id',as:'shippingAddress'});
      Order.hasMany(models.CartItem,{foreignKey:'id',as:'cartItem'});
    }
  }
  Order.init({
    status: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    voucherDiscount : DataTypes.STRING,
    voucherFreeship: DataTypes.STRING,
    account_id: DataTypes.STRING,
    shipping_address_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};