"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savedProductValidate = void 0;
var _require = require('express-validator'),
  body = _require.body,
  query = _require.query;
var add = function add() {
  return [body('album_id').not().isEmpty().withMessage('album_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("album_id không nhiều hơn 100 ký tự"), body('product_id').not().isEmpty().withMessage('product_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("product_id không nhiều hơn 100 ký tự")];
};
var update = function update() {
  return [];
};
var get = function get() {
  return [query('album_id').not().isEmpty().withMessage('album_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("album_id không nhiều hơn 100 ký tự")];
};
var drop = function drop() {
  return [query('id').not().isEmpty().withMessage('id không được để trống').bail().isLength({
    max: 100
  }).withMessage("id không nhiều hơn 100 ký tự")];
};
var savedProductValidate = {
  add: add,
  update: update,
  get: get,
  drop: drop
};
exports.savedProductValidate = savedProductValidate;
//# sourceMappingURL=savedProductValidate.js.map