const {body} = require('express-validator');


const validateUpdateUser = () => {
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

    body('email')
    .not()
    .isEmpty()
    .withMessage('Email không được để trống')
    .bail()
    .isEmail()
    .withMessage('Email không đúng định dạng'),

    body('phonenum').optional({ checkFalsy: true })
    .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g)
    .withMessage('Số điện thoại không đúng định dạng'),

    body('sex').optional().optional({ checkFalsy: true })
    .isIn(['male','female','other'])
    .withMessage('Giới tính không hợp lệ'),

    body('dob').optional().optional({ checkFalsy: true })
    .isDate({format:'YYYY/MM/DD'})
    .withMessage('Năm sinh không đúng định dạng'),
  ]; 
}

export const userValidate = {
    validateUpdateUser
};
