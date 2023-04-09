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
      // define association here
    }
  }
  ShippingAddress.init({
    account_id: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phonenum: DataTypes.STRING,
    city: DataTypes.STRING,
    district: DataTypes.STRING,
    wards: DataTypes.STRING,
    streets: DataTypes.STRING,
    homenum: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShippingAddress',
  });
  return ShippingAddress;
};