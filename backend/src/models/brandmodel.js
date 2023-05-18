'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BrandModel.belongsTo(models.Brand,{foreignKey:'brand_id',targetKey:'id',as:'brand'})
      BrandModel.hasMany(models.CartItem,{foreignKey:'model_id',as:'model'})
    }
  }
  BrandModel.init({
    name: DataTypes.STRING,
    brand_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BrandModel',
  });
  return BrandModel;
};