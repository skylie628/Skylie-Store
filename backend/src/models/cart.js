'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.hasMany(models.CartItem,{foreignKey:'cart_id',as:'cartItem'})
      Cart.belongsTo(models.Account,{foreignKey:'account_id',targetKey:'id',as:'account'})
      Cart.hasOne(models.Order,{foreignKey:'cart_id',as:'order'})
    }
  }
  Cart.init({
    account_id: DataTypes.STRING,
    status: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};