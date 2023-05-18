'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Voucher.hasMany(models.Order,{foreignKey:'voucherDiscount',as:'discount'});
    Voucher.hasMany(models.Order,{foreignKey:'voucherFreeship',as:'freeship'});
    }
  }
  Voucher.init({
    code: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    value: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    isShippingVoucher:DataTypes.BOOLEAN,
    isPercent: DataTypes.BOOLEAN,
    expireDate: DataTypes.DATE, 
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};