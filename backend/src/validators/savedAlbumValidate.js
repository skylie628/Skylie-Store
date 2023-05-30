const {body,query} = require('express-validator');
const add = () => {
    return [ 
      body('name')
      .not()
      .isEmpty()
      .withMessage('status không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("name không nhiều hơn 1000 ký tự"),
      body('account_id')
      .not()
      .isEmpty()
      .withMessage('account_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("account_id không nhiều hơn 100 ký tự")
    ]; 
  }

  const update = () => {
    return [ 
      body('name')
      .not()
      .isEmpty()
      .withMessage('status không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("name không nhiều hơn 1000 ký tự"),
      body('id')
      .not()
      .isEmpty()
      .withMessage('id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("id không nhiều hơn 100 ký tự")
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
    ]
  }
  const getOne = () => {
    return []
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
  
export const savedAlbumValidate = {
    add,update,get,drop,getOne
};
