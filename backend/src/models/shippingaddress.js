'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShippingAddress.belongsTo(models.Account,{foreignKey:'account_id',targetKey:'id',as:'account'})
      ShippingAddress.hasMany(models.Order,{foreignKey:'shipping_address_id',as:'orderAddress'})
    }
  }
  ShippingAddress.init({
    account_id: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phonenum: DataTypes.STRING,
    province: DataTypes.INTEGER,
    district: DataTypes.INTEGER,
    ward: DataTypes.INTEGER,
    homenum: DataTypes.STRING,
    default: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ShippingAddress',
  });
  return ShippingAddress;
};