const {body,query} = require('express-validator');
const add = () => {
    return [ 
      body('firstname')
      .not()
      .isEmpty()
      .withMessage('Firstname không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("Firstname không nhiều hơn 100 ký tự"),
  
      body('lastname')
      .not()
      .isEmpty()
      .withMessage('Lastname không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("Lastname không nhiều hơn 100 ký tự"),
  
      body('province')
      .not()
      .isEmpty()
      .withMessage('Tỉnh/thành phố không được để trống')
      .bail()
      .isInt()
      .withMessage('Province code phải là số nguyên')
      .bail()
      .isLength({ max: 10 }).withMessage("Province code không nhiều hơn 10 ký tự"),
  
      body('district')
      .not()
      .isEmpty()
      .withMessage('Quận/huyện  không được để trống')
      .bail()
      .isInt()
      .withMessage('District code phải là số nguyên')
      .bail()
      .isLength({ max: 10 }).withMessage("District code không nhiều hơn 10 ký tự"),
  
      body('ward')
      .not()
      .isEmpty()
      .withMessage('Phường/xã  không được để trống')
      .bail()
      .isInt()
      .withMessage('Ward code phải là số nguyên')
      .bail()
      .isLength({ max: 10 }).withMessage("Ward code không nhiều hơn 10 ký tự"),

        body('account_id')
      .not()
      .isEmpty()
      .withMessage('account_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage(" không nhiều hơn 100 ký tự"),

      body('address')
      .not()
      .isEmpty()
      .withMessage('Địa chỉ không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("Lastname không nhiều hơn 1000 ký tự"),

      body('homenum')
      .not()
      .isEmpty()
      .withMessage('Vị trí cụ thể không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("Vị trí cụ thể không nhiều hơn 1000 ký tự"),

      body('default')
      .not()
      .isEmpty()
      .withMessage('Default không được để trống')
      .bail()
      .isBoolean()
      .withMessage('Default phải là giá trị Boolean'),

      body('phonenum')
      .not()
      .isEmpty()
      .withMessage('Số điện thoại không được để trống')
      .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g)
      .withMessage('Số điện thoại không đúng định dạng'),
 
    ]; 
  }

  const update = () => {
    return [ 
      body('id')
      .not()
      .isEmpty()
      .withMessage('Id không được để trống'),
      body('firstname')
      .not()
      .isEmpty()
      .withMessage('Firstname không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("Firstname không nhiều hơn 100 ký tự"),
  
      body('lastname')
      .not()
      .isEmpty()
      .withMessage('Lastname không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage("Lastname không nhiều hơn 100 ký tự"),
  
      body('province')
      .not()
      .isEmpty()
      .withMessage('Tỉnh/thành phố không được để trống')
      .bail()
      .isInt()
      .withMessage('Province code phải là số nguyên')
      .bail()
      .isLength({ max: 10 }).withMessage("Province code không nhiều hơn 10 ký tự"),
  
      body('district')
      .not()
      .isEmpty()
      .withMessage('Quận/huyện  không được để trống')
      .bail()
      .isInt()
      .withMessage('District code phải là số nguyên')
      .bail()
      .isLength({ max: 10 }).withMessage("District code không nhiều hơn 10 ký tự"),
  
      body('ward')
      .not()
      .isEmpty()
      .withMessage('Phường/xã  không được để trống')
      .bail()
      .isInt()
      .withMessage('Ward code phải là số nguyên')
      .bail()
      .isLength({ max: 10 }).withMessage("Ward code không nhiều hơn 10 ký tự"),

        body('account_id')
      .not()
      .isEmpty()
      .withMessage('account_id không được để trống')
      .bail()
      .isLength({ max: 100 }).withMessage(" không nhiều hơn 100 ký tự"),

      body('address')
      .not()
      .isEmpty()
      .withMessage('Địa chỉ không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("Lastname không nhiều hơn 1000 ký tự"),

      body('homenum')
      .not()
      .isEmpty()
      .withMessage('Vị trí cụ thể không được để trống')
      .bail()
      .isLength({ max: 1000 }).withMessage("Vị trí cụ thể không nhiều hơn 1000 ký tự"),

      body('default')
      .not()
      .isEmpty()
      .withMessage('Default không được để trống')
      .bail()
      .isBoolean()
      .withMessage('Default phải là giá trị Boolean'),

      body('phonenum')
      .not()
      .isEmpty()
      .withMessage('Số điện thoại không được để trống')
      .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g)
      .withMessage('Số điện thoại không đúng định dạng'),
 
    ]; 
  }

  const get = () => {
    return [
      query('account_id')
      .not()
      .isEmpty()
      .withMessage('Thiếu param')
    ]
  }

  
  const drop = () => {
    return [
      query('id')
      .not()
      .isEmpty()
      .withMessage('Thiếu param')
    ]
  }
  
export const shippingAddressValidate = {
    add,update,get,drop
};
