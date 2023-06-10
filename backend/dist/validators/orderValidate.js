"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderValidate = void 0;
var _require = require('express-validator'),
  body = _require.body,
  query = _require.query;
var add = function add() {
  return [body('account_id').not().isEmpty().withMessage('account_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("account_id không nhiều hơn 100 ký tự"), body('shipping_address_id').not().isEmpty().withMessage('shipping_address_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("shipping_address_id không nhiều hơn 100 ký tự"), body('cart_id').not().isEmpty().withMessage('cart_id  không được để trống').bail().isLength({
    max: 100
  }).withMessage("cart_id không nhiều hơn 100 ký tự")];
};
var update = function update() {
  return [body('status').not().isEmpty().withMessage('status không được để trống').bail().isLength({
    max: 10
  }).withMessage("status không nhiều hơn 10 ký tự"), body('id').not().isEmpty().withMessage('id không được để trống').bail().isLength({
    max: 100
  }).withMessage("id không nhiều hơn 100 ký tự"), body('shipping_address_id').isLength({
    max: 100
  }).withMessage("shipping_address_id không nhiều hơn 100 ký tự"), body('cart_id').isLength({
    max: 100
  }).withMessage("cart_id không nhiều hơn 100 ký tự")];
};
var get = function get() {
  return [query('account_id').not().isEmpty().withMessage('account_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("account_id không nhiều hơn 100 ký tự")];
};
var getOne = function getOne() {
  return [];
};
var drop = function drop() {
  return [query('id').not().isEmpty().withMessage('id không được để trống').bail().isLength({
    max: 100
  }).withMessage("id không nhiều hơn 100 ký tự")];
};
var orderValidate = {
  add: add,
  update: update,
  get: get,
  drop: drop,
  getOne: getOne
};
exports.orderValidate = orderValidate;
//# sourceMappingURL=orderValidate.js.map