'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SavedProduct.belongsTo(models.Product,{foreignKey:'product_id',targetKey:'id',as:'product'})
      SavedProduct.belongsTo(models.SavedAlbum,{foreignKey:'album_id',targetKey:'id',as:'album'})
    }
  }
  SavedProduct.init({
    product_id: DataTypes.STRING,
    album_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SavedProduct',
  });
  return SavedProduct;
};