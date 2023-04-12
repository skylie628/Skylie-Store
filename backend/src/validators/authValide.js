const {body} = require('express-validator');

const validateRegister = () => {
  return [ 
    body('firstname', 'Firstname không được để trống').not().isEmpty()
    .bail().isLength({ max: 100 }).withMessage("Firstname không nhiều hơn 100 ký tự"),

    body('lastname', 'Lastname không được để trống').not().isEmpty()
    .bail().isLength({ max: 100 }).withMessage("Lastname không nhiều hơn 100 ký tự"),

    body('email').not().isEmpty().withMessage('Email không được để trống ')
    .bail().isEmail().withMessage("Email không đúng định dạng")
    .bail().isLength({ max: 320 }).withMessage("Email không nhiều hơn 320 ký tự"),

    body('password').not().isEmpty().withMessage('Password không được để trống')
    .bail().isLength({ min: 6 }).withMessage('Password phải nhiều hơn 6 ký tự')
    .bail().isLength({ max: 320 }).withMessage("Password không nhiều hơn 320 ký tự"),

    body('confirmpassword').not().isEmpty().withMessage('Confirm password không được để trống')
    .bail().custom((value, { req }) => {
        if (value === req.body.password) {
          return true;
        }
        return false;
      })
      .withMessage("Confirm password phải giống password")
  ] 
}

const validateLogin = () => {
  return [ 
    body('email')
    .not()
    .isEmpty()
    .withMessage('Email không được để trống')
    .bail()
    .isEmail()
    .withMessage('Email không đúng định dạng'),

    body('password')
    .not()
    .isEmpty()
    .withMessage('Password không được để trống')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Password phải nhiều hơn 6 ký tự')
  ]; 
}

export const authValidate = {
  validateRegister,
  validateLogin
};

