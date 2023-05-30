const {body,query} = require('express-validator');

const add = () => {
    return [ 
      body('account_id')
      .not()
      .isEmpty()
      .withMessage('account_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("account_id không nhiều hơn 100 ký tự"),
      body('product_id')
      .not()
      .isEmpty()
      .withMessage('product_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("product_id không nhiều hơn 100 ký tự"),
      body('content')
      .not()
      .isEmpty()
      .withMessage('content không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("content không nhiều hơn 100 ký tự"),
      body('rating')
      .not()
      .isEmpty()
      .withMessage('rating  không được để trống')
      .bail()
      .isInt()
      .withMessage('rating phải là số nguyên')
      .bail()
      .isLength({ max: 3 }).withMessage("rating không nhiều hơn 3 ký tự")
     ]; 
  }

  const update = () => {
    return [
      body('id')
      .not()
      .isEmpty()
      .withMessage('id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("id không nhiều hơn 100 ký tự"),
      body('content')
      .isLength({ max: 100 }).withMessage("content không nhiều hơn 100 ký tự"),
      body('rating')
      .isInt()
      .withMessage('rating phải là số nguyên')
      .bail()
      .isLength({ max: 3 }).withMessage("rating không nhiều hơn 3 ký tự")
     ]; 
  }

  const get = () => {
    return [ 
      query('account_id')
      .not()
      .isEmpty()
      .withMessage('account_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("account_id không nhiều hơn 100 ký tự"),
      query('product_id')
      .not()
      .isEmpty()
      .withMessage('product_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("product_id không nhiều hơn 100 ký tự")
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
  const checkAllow = () => {
    return [ 
      
    ]; 
  }
export const commentValidate = {
    add,update,get,drop,checkAllow
};
