"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductServices = exports.updateProductSalesServices = exports.getProductsServices = exports.getProductServices = exports.deleteProductServices = exports.addProductServices = void 0;
var _ConflictError = _interopRequireDefault(require("../errors/ConflictError"));
var _models = _interopRequireWildcard(require("../models"));
var _InvalidParamError = _interopRequireDefault(require("../errors/InvalidParamError"));
var _getProductImage = require("../utils/getProductImage");
var _uuid = require("uuid");
var _NotFoundError = _interopRequireDefault(require("../errors/NotFoundError"));
var _saleProduct = require("./saleProduct");
var _excluded = ["color"],
  _excluded2 = ["color", "options"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var _require = require('sequelize'),
  Op = _require.Op;
var addProductServices = function addProductServices(_ref) {
  var color = _ref.color,
    ProductInfo = _objectWithoutProperties(_ref, _excluded);
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var id, Colors, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            id = (0, _uuid.v4)();
            _context.next = 3;
            return _models["default"].Color.findAll({
              where: {
                id: color
              }
            });
          case 3:
            Colors = _context.sent;
            _context.next = 6;
            return _models["default"].Product.create(_objectSpread({
              id: id
            }, ProductInfo), {
              include: [{
                model: _models["default"].ProductOption,
                as: 'options'
              }]
            });
          case 6:
            response = _context.sent;
            response.addColor(Colors);
            if (response) {
              resolve({
                id: id,
                err: 0,
                msg: 'add Product successfully'
              });
            } else {
              reject(new _ConflictError["default"]('Product đã tồn tại'));
            }
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }());
};
exports.addProductServices = addProductServices;
var getProductsServices = function getProductsServices(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var _price2;
      var queryObject, collectionQuery, priceQuery, nameQuery, whereQuery, conditions, response, rst, maxCount, promises, fetchedResponse;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log('data la', data);
            queryObject = {
              raw: true,
              nest: true,
              include: [{
                model: _models["default"].ProductOption,
                attributes: ['showing_img_thumbnail'],
                as: 'options'
              }]
            };
            collectionQuery = {
              collection_id: _defineProperty({}, Op.eq, data.collection)
            };
            priceQuery = data.price == 0 ? {
              price: _defineProperty({}, Op.lt, 100000)
            } : data.price == 1 ? {
              price: (_price2 = {}, _defineProperty(_price2, Op.and, _defineProperty({}, Op.gte, 100000)), _defineProperty(_price2, Op.lt, 200000), _price2)
            } : {
              price: _defineProperty({}, Op.gte, 200000)
            };
            nameQuery = {
              name: _defineProperty({}, Op.like, "%".concat(data.name, "%"))
            };
            whereQuery = {};
            if (data.collection && !data.price && !data.name) {
              whereQuery = collectionQuery;
            } else if (!data.collection && data.price && !data.name) {
              whereQuery = priceQuery;
            } else if (!data.collection && !data.price && data.name) {
              whereQuery = nameQuery;
            } else if (!data.collection && !data.price && !data.name) {
              whereQuery = {};
            } else {
              conditions = [];
              if (data.collection) {
                conditions.push(collectionQuery);
              }
              if (data.price) {
                conditions.push(priceQuery);
              }
              if (data.name) {
                conditions.push(nameQuery);
              }
              whereQuery = _defineProperty({}, Op.and, conditions);
            }
            _context2.next = 9;
            return _models["default"].Product.findAll({
              where: whereQuery,
              order: data.order == 0 ? [['createdAt', 'DESC']] : data.order == 1 ? [['sales', 'DESC']] : [['price', 'DESC']],
              include: [{
                model: _models["default"].ProductOption,
                attributes: ['showing_img_thumbnail'],
                as: 'options'
              }, {
                model: _models["default"].Color,
                attributes: ['id'],
                as: 'colors'
              }],
              nest: true
              //offset: +data.offset*9,
              //limit:9,
            });
          case 9:
            response = _context2.sent;
            response = JSON.parse(JSON.stringify(response));
            rst = response;
            console.log(rst.response);
            if (data.colors) {
              rst = response.filter(function (product) {
                return product.colors.some(function (color) {
                  return data.colors.includes(color.id);
                });
              });
            }
            maxCount = rst.length;
            rst = rst.splice(data.offset * data.limit, data.limit);
            console.log('data là', data);
            //get Image Url
            promises = rst.map(function (product) {
              return (0, _getProductImage.getProductImage)("Products/Medium/showing image thumnail/".concat(product.options[0].showing_img_thumbnail, ".png")).then(function (rst) {
                return _objectSpread(_objectSpread({}, product), {}, {
                  options: {
                    showing_img_thumbnail: rst[0]
                  }
                });
              });
            });
            _context2.next = 20;
            return Promise.all(promises);
          case 20:
            fetchedResponse = _context2.sent;
            //getSalesCampaign 
            promises = fetchedResponse.map(function (product) {
              return (0, _saleProduct.getSalesPrice)(product.id).then(function (rs) {
                return _objectSpread(_objectSpread({}, product), {}, {
                  campaign: rs
                });
              });
            });
            _context2.next = 24;
            return Promise.all(promises);
          case 24:
            fetchedResponse = _context2.sent;
            //product.options.straight_img= await getProductImage(`Products/Medium/str image/${product.options.straight_img}.png`);
            //product.options.straight_img= await getProductImage(`Products/Medium/str image/${product.options.straight_img}.png`);
            //product.options.side_img_thumbnail= await getProductImage(`Products/Medium/side image thumbnail/${product.options.side_img_thumbnail}.png`);
            //product.options.side_img= await getProductImage(`Products/Medium/side image/${product.options.side_img}.png`);

            //const rst = await getProductImage(`/Products/Medium/showing image thumnail/medium-12-zodiacs-0001-showing-img-thumbnail.png`)
            //console.log(rst)
            //console.log('response là',response);
            resolve({
              data: {
                maxCount: maxCount,
                products: fetchedResponse
              },
              err: 0
            });
          case 26:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }());
};
exports.getProductsServices = getProductsServices;
var getProductServices = function getProductServices(ProductInfo) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var response, campaign;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            console.log(ProductInfo);
            _context3.next = 4;
            return _models["default"].Product.findOne({
              where: {
                slug: ProductInfo.slug
              },
              include: [{
                model: _models["default"].ProductOption,
                attributes: ['id', 'showing_img_thumbnail', 'name', 'straight_img', 'straight_img_thumbnail', 'side_img', 'side_img_thumbnail'],
                as: 'options'
              }, {
                model: _models["default"].Color,
                attributes: ['id'],
                as: 'colors'
              }],
              nest: true
            });
          case 4:
            response = _context3.sent;
            response = JSON.parse(JSON.stringify(response));
            console.log('response la', response);
            _context3.next = 9;
            return (0, _getProductImage.getProductImage)("Products/Medium/showing image thumnail/".concat(response.options[0].showing_img_thumbnail, ".png")).then(function (rs) {
              return response.options[0].showing_img_thumbnail = rs[0];
            });
          case 9:
            _context3.next = 11;
            return (0, _getProductImage.getProductImage)("Products/Medium/str image/".concat(response.options[0].straight_img, ".png")).then(function (rs) {
              return response.options[0].straight_img = rs[0];
            });
          case 11:
            _context3.next = 13;
            return (0, _getProductImage.getProductImage)("Products/Medium/straight image thumbnail/".concat(response.options[0].straight_img_thumbnail, ".png")).then(function (rs) {
              return response.options[0].straight_img_thumbnail = rs[0];
            });
          case 13:
            _context3.next = 15;
            return (0, _getProductImage.getProductImage)("Products/Medium/side image/".concat(response.options[0].side_img, ".png")).then(function (rs) {
              return response.options[0].side_img = rs[0];
            });
          case 15:
            _context3.next = 17;
            return (0, _getProductImage.getProductImage)("Products/Medium/side image thumbnail/".concat(response.options[0].side_img_thumbnail, ".png")).then(function (rs) {
              return response.options[0].side_img_thumbnail = rs[0];
            });
          case 17:
            _context3.next = 19;
            return (0, _saleProduct.getSalesPrice)(response.id);
          case 19:
            campaign = _context3.sent;
            response.campaign = campaign;
            console.log(response);
            response ? resolve({
              err: 0,
              data: response,
              msg: 'get thành công'
            }) : reject(new _InvalidParamError["default"]('Không tìm thấy Product tương ứng'));
            _context3.next = 28;
            break;
          case 25:
            _context3.prev = 25;
            _context3.t0 = _context3["catch"](0);
            reject(new _InvalidParamError["default"]('Không tìm thấy Product tương ứng'));
          case 28:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 25]]);
    }));
    return function (_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  }());
};
exports.getProductServices = getProductServices;
var updateProductServices = function updateProductServices(_ref5) {
  var color = _ref5.color,
    options = _ref5.options,
    ProductInfo = _objectWithoutProperties(_ref5, _excluded2);
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var foundProduct, updatedProduct, Colors;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            console.log(options);
            _context4.next = 3;
            return _models["default"].Product.findOne({
              where: {
                id: ProductInfo.id
              }
            });
          case 3:
            foundProduct = _context4.sent;
            if (!foundProduct) {
              _context4.next = 21;
              break;
            }
            _context4.next = 7;
            return foundProduct.update(ProductInfo);
          case 7:
            updatedProduct = _context4.sent;
            _context4.next = 10;
            return _models["default"].Color.findAll({
              where: {
                id: color
              }
            });
          case 10:
            Colors = _context4.sent;
            _context4.next = 13;
            return Colors[0];
          case 13:
            _context4.t0 = _context4.sent;
            if (!_context4.t0) {
              _context4.next = 16;
              break;
            }
            updatedProduct.setColors(Colors);
          case 16:
            _context4.next = 18;
            return updatedProduct.setProductOptions(options);
          case 18:
            resolve({
              err: 0,
              msg: 'Update thành công'
            });
            _context4.next = 22;
            break;
          case 21:
            reject(new _InvalidParamError["default"]('Sản phẩm không tồn tại'));
          case 22:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  }());
};
exports.updateProductServices = updateProductServices;
var updateProductSalesServices = function updateProductSalesServices(_ref7) {
  var best_sale = _ref7.best_sale,
    product_id = _ref7.product_id,
    quantity = _ref7.quantity;
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _models["default"].Product.increment('sales', {
              by: quantity,
              where: {
                id: product_id
              }
            });
          case 2:
            response = _context5.sent;
            resolve(response);
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x9, _x10) {
      return _ref8.apply(this, arguments);
    };
  }());
};
exports.updateProductSalesServices = updateProductSalesServices;
var deleteProductServices = function deleteProductServices(ProductInfo) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _models["default"].Product.destroy({
              where: {
                id: ProductInfo.id
              }
            });
          case 3:
            response = _context6.sent;
            response ? resolve({
              err: 0,
              msg: 'xóa thành công'
            }) : reject(new _InvalidParamError["default"]('Không tìm thấy Product tương ứng'));
            _context6.next = 10;
            break;
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            reject(new _InvalidParamError["default"]('Cập nhật không thành công'));
          case 10:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 7]]);
    }));
    return function (_x11, _x12) {
      return _ref9.apply(this, arguments);
    };
  }());
};
exports.deleteProductServices = deleteProductServices;
//# sourceMappingURL=product.js.map