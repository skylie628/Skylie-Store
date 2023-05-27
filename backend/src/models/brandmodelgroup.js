'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BrandModelGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BrandModelGroup.belongsTo(models.Brand,{foreignKey:'brand_id',targetKey:'id',as:'brand'})
      BrandModelGroup.hasMany(models.BrandModel,{foreignKey:'brandmodelgroup_id',as:'brandmodel'})
    }
  }
  BrandModelGroup.init({
    id:{
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
    name: DataTypes.STRING,
    brand_id: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BrandModelGroup',
  });
  return BrandModelGroup;
};