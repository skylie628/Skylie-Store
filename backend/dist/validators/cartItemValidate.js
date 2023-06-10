"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartItemValidate = void 0;
var _require = require('express-validator'),
  body = _require.body,
  query = _require.query;
var add = function add() {
  return [body('cart_id').not().isEmpty().withMessage('cart_id không được để trống').bail().isLength({
    max: 100
  }).withMessage(" không nhiều hơn 100 ký tự"), body('model_id').not().isEmpty().withMessage('model id không được để trống').bail().isLength({
    max: 100
  }).withMessage("Id không nhiều hơn 100 ký tự")], body('productoption_id').not().isEmpty().withMessage('productoption_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("Id không nhiều hơn 100 ký tự"), body('material_id').not().isEmpty().withMessage('material_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("Id không nhiều hơn 100 ký tự");
};
var update = function update() {
  return [body('id').not().isEmpty().withMessage('id không được để trống').bail().isLength({
    max: 100
  }).withMessage("id không nhiều hơn 100 ký tự")], body('quantity').not().isEmpty().withMessage('Số lượng  không được để trống').bail().isInt().withMessage('Số lượng phải là số nguyên').bail().isLength({
    max: 3
  }).withMessage("Số lượng không nhiều hơn 3");
};
var get = function get() {
  return [query('cart_id').not().isEmpty().withMessage('Thiếu param')];
};
var drop = function drop() {
  return [query('id').not().isEmpty().withMessage('Thiếu param')];
};
var cartItemValidate = {
  add: add,
  update: update,
  get: get,
  drop: drop
};
exports.cartItemValidate = cartItemValidate;
//# sourceMappingURL=cartItemValidate.js.map