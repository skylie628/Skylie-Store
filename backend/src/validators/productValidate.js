const {body,query} = require('express-validator');
/*name: DataTypes.STRING,
    lasted: DataTypes.BOOLEAN,
    best_sale: DataTypes.BOOLEAN,
    color: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    collection_id: DataTypes.STRING,*/
const add = () => {
    return [ 
      body('name')
      .not()
      .isEmpty()
      .withMessage('Name không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("Name không nhiều hơn 1000 ký tự"),
      body('color')
      .not()
      .isEmpty()
      .withMessage('Color không được để trống'),
      body('price')
      .not()
      .isEmpty()
      .withMessage('Price không được để trống')
      .bail()
      .isInt()
      .withMessage('Price phải là số nguyên'),
      body('sales')
      .not()
      .isEmpty()
      .withMessage('Sales không được để trống')
      .bail()
      .isInt()
      .withMessage('Sales phải là số nguyên'),
      body('collection_id')
      .not()
      .isEmpty()
      .withMessage('Id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("Id không nhiều hơn 100 ký tự"),
    ]; 
  }

  const update = () => {
    return [ 
        body('id')
        .not()
        .isEmpty()
        .withMessage('Id không được để trống')
        .bail()
        .isLength({ max: 100 }).withMessage("Id không nhiều hơn 100 ký tự"),
        body('name')
        .not()
        .isEmpty()
        .withMessage('Name không được để trống')
        .bail()
        .isLength({ max: 1000 }).withMessage("Name không nhiều hơn 1000 ký tự"),
        body('color')
        .not()
        .isEmpty()
        .withMessage('Color không được để trống'),
        body('price')
        .not()
        .isEmpty()
        .withMessage('Price không được để trống')
        .bail()
        .isInt()
        .withMessage('Price phải là số nguyên'),
        body('sales')
        .not()
        .isEmpty()
        .withMessage('Sale không được để trống')
        .bail()
        .isInt()
        .withMessage('Sale phải là số nguyên'),
        body('collection_id')
        .not()
        .isEmpty()
        .withMessage('Id không được để trống')
        .bail()
        .isLength({ max: 100 }).withMessage("Id không nhiều hơn 100 ký tự"),
      ]; 
  }

  const get = () => {
    return []
  }
  const getOne = () => {
    return []
  }
  
  const drop = () => {
    return [
      query('id')
      .not()
      .isEmpty()
      .withMessage('Thiếu param')
    ]
  }
  
export const productValidate = {
    add,update,get,drop,getOne
};
