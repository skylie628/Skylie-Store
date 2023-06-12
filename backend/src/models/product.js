'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Collection,{foreignKey:'collection_id',targetKey:'id', as:'collection'})
      Product.belongsToMany(models.Color,{through : 'Product_Color', as : 'colors'})
      Product.hasMany(models.ProductOption,{foreignKey:'product_id',as:'options'})
      Product.hasMany(models.SaleProduct,{foreignKey:'product_id',as:'sale'})
      Product.hasMany(models.Comment,{foreignKey:'product_id',as:'comments'})
    }
  }
  Product.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: DataTypes.STRING,
    best_sale: DataTypes.BOOLEAN,
    lasted: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    sales: DataTypes.INTEGER,
    collection_id: DataTypes.STRING,
    slug: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  Product.beforeCreate(async (product,option)=>{
    console.log(product);
    //update lasted;
    const lastedUpdate = await Product.findOne({
      where:{},
      order: [['createdAt','DESC']],
      offset: 2,
      limit: 1,
  }) 
  lastedUpdate&&lastedUpdate.update( {
    lasted: false
  })
    //update
    const  rst = await Product.findAll({
        attributes: ['sales'],
        order: [['sales','DESC']],
        raw: true,
        limit: 3,
        group: ['sales'],
    }) 
    if (rst.length<3 || rst.length==3 && rst[2].sales == product.dataValues.sales ){
        product.dataValues.best_sale = true;
    }
    else {
        if(product.dataValues.sales > rst[2].sales){
            console.log('true');
            product.dataValues.best_sale = true;
            Product.update({
                best_sale: false
            },{
                where :{sales:rst[2].sales} 
            })
        }
    }
    /*if(deriveUpdate.length == 0 || (deriveUpdate[0].dataValues.sales <= product.dataValues.sales)){

        if(deriveUpdate[0] && (deriveUpdate[0].dataValues.sales < product.dataValues.sales) ){
            console.log('devire',deriveUpdate[0].dataValues.sales,'product', product.dataValues.sales)
            deriveUpdate.forEach(x => x.update({best_sale : false})) 
            await deriveUpdate[0].save();
        
        };
       product.dataValues.best_sale = true
    }*/
  })
  return Product;
};