'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CartItem.belongsTo(models.BrandModel,{foreignKey:'model_id',targetKey:'id',as:'model'})
      CartItem.belongsTo(models.ProductOption,{foreignKey:'productoption_id',targetKey:'id',as:'option'})
      CartItem.belongsTo(models.Material,{foreignKey:'material_id',targetKey:'id',as:'material'})
      CartItem.belongsTo(models.Cart,{foreignKey:'cart_id',targetKey:'id',as:'cartItem'})
    }
  }
  CartItem.init({
    cart_id: DataTypes.STRING,
    model_id: DataTypes.STRING,
    material_id: DataTypes.STRING,
    productoption_id: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};