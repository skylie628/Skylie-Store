'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedAlbum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SavedAlbum.belongsTo(models.Account,{foreignKey:'account_id',targetKey:'id',as:'account'})
      SavedAlbum.hasMany(models.SavedProduct,{foreignKey:'album_id',as:'savedProduct'})
    }
  }
  SavedAlbum.init({
    account_id: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SavedAlbum',
  });
  return SavedAlbum;
};