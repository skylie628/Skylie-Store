"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productValidate = void 0;
var _require = require('express-validator'),
  body = _require.body,
  query = _require.query;
/*name: DataTypes.STRING,
    lasted: DataTypes.BOOLEAN,
    best_sale: DataTypes.BOOLEAN,
    color: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    collection_id: DataTypes.STRING,*/
var add = function add() {
  return [body('name').not().isEmpty().withMessage('Name không được để trống').bail().isLength({
    max: 1000
  }).withMessage("Name không nhiều hơn 1000 ký tự"), body('color').not().isEmpty().withMessage('Color không được để trống'), body('price').not().isEmpty().withMessage('Price không được để trống').bail().isInt().withMessage('Price phải là số nguyên'), body('sales').not().isEmpty().withMessage('Sales không được để trống').bail().isInt().withMessage('Sales phải là số nguyên'), body('collection_id').not().isEmpty().withMessage('Id không được để trống').bail().isLength({
    max: 100
  }).withMessage("Id không nhiều hơn 100 ký tự")];
};
var update = function update() {
  return [body('id').not().isEmpty().withMessage('Id không được để trống').bail().isLength({
    max: 100
  }).withMessage("Id không nhiều hơn 100 ký tự"), body('name').not().isEmpty().withMessage('Name không được để trống').bail().isLength({
    max: 1000
  }).withMessage("Name không nhiều hơn 1000 ký tự"), body('color').not().isEmpty().withMessage('Color không được để trống'), body('price').not().isEmpty().withMessage('Price không được để trống').bail().isInt().withMessage('Price phải là số nguyên'), body('sales').not().isEmpty().withMessage('Sale không được để trống').bail().isInt().withMessage('Sale phải là số nguyên'), body('collection_id').not().isEmpty().withMessage('Id không được để trống').bail().isLength({
    max: 100
  }).withMessage("Id không nhiều hơn 100 ký tự")];
};
var get = function get() {
  return [];
};
var getOne = function getOne() {
  return [];
};
var drop = function drop() {
  return [query('id').not().isEmpty().withMessage('Thiếu param')];
};
var productValidate = {
  add: add,
  update: update,
  get: get,
  drop: drop,
  getOne: getOne
};
exports.productValidate = productValidate;
//# sourceMappingURL=productValidate.js.map