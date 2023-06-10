"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentValidate = void 0;
var _require = require('express-validator'),
  body = _require.body,
  query = _require.query;
var add = function add() {
  return [body('account_id').not().isEmpty().withMessage('account_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("account_id không nhiều hơn 100 ký tự"), body('product_id').not().isEmpty().withMessage('product_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("product_id không nhiều hơn 100 ký tự"), body('content').not().isEmpty().withMessage('content không được để trống').bail().isLength({
    max: 100
  }).withMessage("content không nhiều hơn 100 ký tự"), body('rating').not().isEmpty().withMessage('rating  không được để trống').bail().isInt().withMessage('rating phải là số nguyên').bail().isLength({
    max: 3
  }).withMessage("rating không nhiều hơn 3 ký tự")];
};
var update = function update() {
  return [body('id').not().isEmpty().withMessage('id không được để trống').bail().isLength({
    max: 100
  }).withMessage("id không nhiều hơn 100 ký tự"), body('content').isLength({
    max: 100
  }).withMessage("content không nhiều hơn 100 ký tự"), body('rating').isInt().withMessage('rating phải là số nguyên').bail().isLength({
    max: 3
  }).withMessage("rating không nhiều hơn 3 ký tự")];
};
var get = function get() {
  return [query('account_id').not().isEmpty().withMessage('account_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("account_id không nhiều hơn 100 ký tự"), query('product_id').not().isEmpty().withMessage('product_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("product_id không nhiều hơn 100 ký tự")];
};
var drop = function drop() {
  return [query('id').not().isEmpty().withMessage('id không được để trống').bail().isLength({
    max: 100
  }).withMessage("id không nhiều hơn 100 ký tự")];
};
var checkAllow = function checkAllow() {
  return [];
};
var commentValidate = {
  add: add,
  update: update,
  get: get,
  drop: drop,
  checkAllow: checkAllow
};
exports.commentValidate = commentValidate;
//# sourceMappingURL=commentValidate.js.map