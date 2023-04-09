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
      // define association here
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