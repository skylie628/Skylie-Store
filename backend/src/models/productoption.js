'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductOption.belongsTo(models.Product,{foreignKey:'product_id',targetKey:'id',as:'product'}),
      ProductOption.hasMany(models.CartItem,{foreignKey:'productoption_id',as:'cart'})
    }
  }
  ProductOption.init({
    name: DataTypes.STRING,
    showing_img_thumbnail: DataTypes.STRING,
    straight_img: DataTypes.STRING,
    straight_img_thumbnail: DataTypes.STRING,
    side_img: DataTypes.STRING,
    side_img_thumbnail: DataTypes.STRING,
    product_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductOption',
  });
  return ProductOption;
};