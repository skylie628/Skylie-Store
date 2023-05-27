'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        SaleProduct.belongsTo(models.Product,{foreignKey:'product_id',targetKey:'id',as:'product'}),
        SaleProduct.belongsTo(models.SaleCampaign,{foreignKey:'campaign_id',targetKey:'id',as:'campaign'})
  }
  }
  SaleProduct.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    campaign_id: DataTypes.STRING,
    product_id:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'SaleProduct',
  });
  return SaleProduct;
};