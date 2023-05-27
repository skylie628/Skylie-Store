'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleCampaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SaleCampaign.hasMany(models.SaleProduct,{foreignKey:'campaign_id',as:'saleproduct'})
      SaleCampaign.hasMany(models.OrderItem,{foreignKey:'campaign_id',as:'order'})
  }
  }
  SaleCampaign.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    value: DataTypes.INTEGER, //percent sales
    name:DataTypes.STRING,
    status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SaleCampaign',
  });
  return SaleCampaign;
};