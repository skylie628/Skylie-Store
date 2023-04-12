'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasMany(models.Comment,{foreignKey:'account_id', as:'account'}),
      Account.hasMany(models.ShippingAddress,{foreignKey:'account_id', as:'shippingaddress'})
    }
  }
  Account.init({
    sex: DataTypes.STRING,
    dob: DataTypes.DATEONLY ,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenum: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};