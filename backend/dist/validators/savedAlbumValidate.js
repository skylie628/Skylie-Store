"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.savedAlbumValidate = void 0;
var _require = require('express-validator'),
  body = _require.body,
  query = _require.query;
var add = function add() {
  return [body('name').not().isEmpty().withMessage('status không được để trống').bail().isLength({
    max: 1000
  }).withMessage("name không nhiều hơn 1000 ký tự"), body('account_id').not().isEmpty().withMessage('account_id không được để trống').bail().isLength({
    max: 100
  }).withMessage("account_id không nhiều hơn 100 ký tự")];
};
var update = function update() {
  return [body('name').not().isEmpty().withMessage('status không được để trống').bail().isLength({
    max: 1000
  }).withMessage("name không nhiều hơn 1000 ký tự"), body('id').not().isEmpty().withMessage('id không được để trống').bail().isLength({
    max: 100
  }).withMessage("id không nhiều hơn 100 ký tự")];
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
var savedAlbumValidate = {
  add: add,
  update: update,
  get: get,
  drop: drop,
  getOne: getOne
};
exports.savedAlbumValidate = savedAlbumValidate;
//# sourceMappingURL=savedAlbumValidate.js.map