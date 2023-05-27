'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderItem.belongsTo(models.BrandModel,{foreignKey:'model_id',targetKey:'id',as:'model'})
      OrderItem.belongsTo(models.ProductOption,{foreignKey:'productoption_id',targetKey:'id',as:'option'})
     OrderItem.belongsTo(models.Material,{foreignKey:'material_id',targetKey:'id',as:'material'})
      OrderItem.belongsTo(models.Order,{foreignKey:'order_id',targetKey:'id',as:'order'})
      OrderItem.belongsTo(models.SaleCampaign,{foreignKey:'campaign_id',targetKey:'id',as:'saleCampaign'})
  }}
  OrderItem.init({
    order_id: DataTypes.STRING,
    model_id: DataTypes.STRING,
    material_id: DataTypes.STRING,
    productoption_id: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    campaign_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};