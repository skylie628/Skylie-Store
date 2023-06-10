"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectionValidate = void 0;
var _require = require('express-validator'),
  body = _require.body,
  query = _require.query;
var add = function add() {
  return [body('name').not().isEmpty().withMessage('name không được để trống').bail().isLength({
    max: 1000
  }).withMessage("name không nhiều hơn 1000 ký tự")];
};
var update = function update() {
  return [body('id').not().isEmpty().withMessage('Id không được để trống'), body('name').not().isEmpty().withMessage('Name không được để trống').bail().isLength({
    max: 1000
  }).withMessage("Name không nhiều hơn 100 ký tự"), body('name').not().isEmpty().withMessage('name không được để trống').bail().isLength({
    max: 1000
  }).withMessage("name không nhiều hơn 1000 ký tự")];
};
var get = function get() {
  return [];
};
var drop = function drop() {
  return [query('id').not().isEmpty().withMessage('Thiếu param')];
};
var collectionValidate = {
  add: add,
  update: update,
  get: get,
  drop: drop
};
exports.collectionValidate = collectionValidate;
//# sourceMappingURL=collectionValidate.js.map