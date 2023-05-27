'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Account,{foreignKey:'account_id',targetKey:'id',as :'account'})
      Comment.belongsTo(models.Product,{foreignKey:'product_id',targetKey:'id',as :'product'})
    }
  }
  Comment.init({
    account_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};