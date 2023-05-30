const {body,query} = require('express-validator');
const add = () => {
    return [ 
      body('album_id')
      .not()
      .isEmpty()
      .withMessage('album_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("album_id không nhiều hơn 100 ký tự"),
      body('product_id')
      .not()
      .isEmpty()
      .withMessage('product_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("product_id không nhiều hơn 100 ký tự")
    ]; 
  }

  const update = () => {
    return [ 

    ]; 
  }

  const get = () => {
    return [      query('album_id')
    .not()
    .isEmpty()
    .withMessage('album_id không được để trống')
    .bail()
    .isLength({ max: 100 }).withMessage("album_id không nhiều hơn 100 ký tự")]
  }

  
  const drop = () => {
    return [
      query('id')
    .not()
    .isEmpty()
    .withMessage('id không được để trống')
    .bail()
    .isLength({ max: 100 }).withMessage("id không nhiều hơn 100 ký tự")
    ]
  }
  
export const savedProductValidate = {
    add,update,get,drop
};
