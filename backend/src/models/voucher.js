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
  }
  }
  Voucher.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    code: DataTypes.STRING,
    value: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    account_id: DataTypes.STRING,
    isPercent: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Voucher',
  });
  return Voucher;
};