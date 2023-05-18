const {body,query} = require('express-validator');
const add = () => {
    return [ 
      body('name')
      .not()
      .isEmpty()
      .withMessage('name không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("name không nhiều hơn 1000 ký tự"),
    ]; 
  }

  const update = () => {
    return [ 
      body('id')
      .not()
      .isEmpty()
      .withMessage('Id không được để trống'),
      body('name')
      .not()
      .isEmpty()
      .withMessage('Name không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("Name không nhiều hơn 100 ký tự"),
      body('name')
      .not()
      .isEmpty()
      .withMessage('name không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("name không nhiều hơn 1000 ký tự"),
    ]; 
  }

  const get = () => {
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
  
export const collectionValidate = {
    add,update,get,drop
};
