const {body,query} = require('express-validator');

const add = () => {
    return [ 
      body('account_id')
      .not()
      .isEmpty()
      .withMessage('account_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("account_id không nhiều hơn 100 ký tự"),
      body('shipping_address_id')
      .not()
      .isEmpty()
      .withMessage('shipping_address_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("shipping_address_id không nhiều hơn 100 ký tự"),
      body('cart_id')
      .not()
      .isEmpty()
      .withMessage('cart_id  không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("cart_id không nhiều hơn 100 ký tự")
     ]; 
  }

  const update = () => {
    return [ 
      body('status')
      .not()
      .isEmpty()
      .withMessage('status không được để trống')
      .bail()
      .isLength({ max: 10 }).withMessage("status không nhiều hơn 10 ký tự"),
      body('id')
      .not()
      .isEmpty()
      .withMessage('id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("id không nhiều hơn 100 ký tự"),
      body('shipping_address_id')
      .isLength({ max: 100 }).withMessage("shipping_address_id không nhiều hơn 100 ký tự"),
      body('cart_id')
      .isLength({ max: 100 }).withMessage("cart_id không nhiều hơn 100 ký tự")
    ]; 
  }

  const get = () => {
    return [ 
      query('account_id')
      .not()
      .isEmpty()
      .withMessage('account_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("account_id không nhiều hơn 100 ký tự")
    ]; 
  }

  const getOne = () => {
    return [ 
      
    ]; 
  }
  
  const drop = () => {
    return [ 
      query('id')
      .not()
      .isEmpty()
      .withMessage('id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("id không nhiều hơn 100 ký tự")
    ]; 
  }

export const orderValidate = {
    add,update,get,drop,getOne
};

