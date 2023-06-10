"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrderServices = exports.getOrdersServices = exports.getOneOrderServices = exports.deleteOrderServices = exports.addOrderServices = void 0;
var _ConflictError = _interopRequireDefault(require("../errors/ConflictError"));
var _InvalidParamError = _interopRequireDefault(require("../errors/InvalidParamError"));
var _models = _interopRequireWildcard(require("../models"));
var _uuid = require("uuid");
var _shippingAddress = require("./shippingAddress");
var _getProductImage = require("../utils/getProductImage");
var _orderItem = require("./orderItem");
var _giaohangtietkiem = require("./giaohangtietkiem");
var _cart = require("./cart");
var _sequelize = require("sequelize");
var _product = require("./product");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _require = require('sequelize'),
  Op = _require.Op;
var addOrderServices = function addOrderServices(info) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var _shippingAddress$data, _shippingAddress$data2;
      var t, id, _yield$getTotalCartPr, price, products, orderItems, shippingAddress, shippingFee, quantity, total, response, promises, fetchrst;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _models.sequelize.transaction();
          case 2:
            t = _context.sent;
            id = (0, _uuid.v4)();
            console.log('info order la', info);
            //get all inco
            //calculate total product price
            _context.next = 7;
            return (0, _cart.getTotalCartPrice)(info.cart_id, id);
          case 7:
            _yield$getTotalCartPr = _context.sent;
            price = _yield$getTotalCartPr.price;
            products = _yield$getTotalCartPr.products;
            orderItems = _yield$getTotalCartPr.orderItems;
            console.log('price là', price);
            //get shipping address infomation
            _context.next = 14;
            return (0, _shippingAddress.getShippingAddressServices)(info.shipping_address_id);
          case 14:
            shippingAddress = _context.sent;
            //calculate shipping fee
            console.log('shipping address la', shippingAddress);
            shippingFee = 32000;
            quantity = orderItems.reduce(function (x, y) {
              return x + y.quantity;
            }, 0);
            _context.next = 20;
            return (0, _giaohangtietkiem.apiGetFee)({
              province: +(shippingAddress === null || shippingAddress === void 0 ? void 0 : (_shippingAddress$data = shippingAddress.data) === null || _shippingAddress$data === void 0 ? void 0 : _shippingAddress$data.province),
              district: +(shippingAddress === null || shippingAddress === void 0 ? void 0 : (_shippingAddress$data2 = shippingAddress.data) === null || _shippingAddress$data2 === void 0 ? void 0 : _shippingAddress$data2.district),
              quantity: quantity
            }).then(function (rst) {
              console.log('phi la', rst.fee);
              return rst.fee;
            });
          case 20:
            shippingFee = _context.sent;
            // calculate total
            total = price + shippingFee;
            console.log('', total);

            //create order
            _context.next = 25;
            return _models["default"].Order.findOrCreate({
              where: {
                cart_id: info.cart_id
              },
              defaults: _defineProperty({
                id: id,
                status: info.status,
                shipping_address_id: info.shipping_address_id,
                shipping_fee: shippingFee,
                cart_id: info.cart_id,
                total_price: total
              }, "status", 'Created')
            });
          case 25:
            response = _context.sent;
            console.log('after creating order');
            if (!response[1]) {
              _context.next = 42;
              break;
            }
            _context.next = 30;
            return (0, _cart.updateCartServices)({
              id: info.cart_id,
              status: 'Order'
            });
          case 30:
            (0, _cart.addCartServices)(info.account_id);
            //add CartItem
            _context.next = 33;
            return (0, _orderItem.addOrderItemsServices)(orderItems);
          case 33:
            //update product sales
            console.log('orderItems là', orderItems);
            console.log('product là', products);
            promises = products.map(function (product, index) {
              return (0, _product.updateProductSalesServices)({
                best_sale: product.best_sale,
                product_id: product.id,
                quantity: orderItems[index].quantity
              });
            });
            _context.next = 38;
            return Promise.all(promises);
          case 38:
            fetchrst = _context.sent;
            resolve({
              id: id,
              err: 0,
              msg: 'add order thành công'
            });

            // const itemsInfo = optionsInfo.map(option => {})
            _context.next = 43;
            break;
          case 42:
            reject(new _ConflictError["default"]('order đã tồn tại'));
          case 43:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
exports.addOrderServices = addOrderServices;
var getOrdersServices = function getOrdersServices(_ref2) {
  var account_id = _ref2.account_id;
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var response, promises, fectchresult;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log("account_id là", account_id);
            _context2.next = 3;
            return _models["default"].Order.findAll({
              nest: true,
              where: {
                '$cart.account_id$': _defineProperty({}, Op.eq, account_id)
              },
              order: [['createdAt', 'DESC']],
              include: [{
                model: _models["default"].Cart,
                as: 'cart',
                attributes: ['id', 'account_id']
              }, {
                model: _models["default"].OrderItem,
                as: 'orderItem',
                raw: true,
                nested: true,
                nest: true,
                include: [{
                  model: _models["default"].BrandModel,
                  attributes: ['id', 'name'],
                  as: 'model'
                }, {
                  model: _models["default"].Material,
                  attributes: ['id', 'name'],
                  as: 'material'
                }, {
                  model: _models["default"].ProductOption,
                  attributes: ['id', 'name', 'straight_img_thumbnail'],
                  include: [{
                    model: _models["default"].Product,
                    attribute: ['id', 'name', 'price', 'slug'],
                    as: 'product'
                  }],
                  as: 'option'
                }, {
                  model: _models["default"].SaleCampaign,
                  as: 'saleCampaign'
                }]
              }]
            });
          case 3:
            response = _context2.sent;
            response = JSON.parse(JSON.stringify(response));
            console.log('rs order la', response);
            promises = response.map(function (order, index) {
              var innerPromise = order.orderItem.map(function (orderItem) {
                return (0, _getProductImage.getProductImage)("Products/Medium/straight image thumbnail/".concat(orderItem.option.straight_img_thumbnail, ".png")).then(function (rst) {
                  return _objectSpread(_objectSpread({}, orderItem), {}, {
                    option: _objectSpread(_objectSpread({}, orderItem.option), {}, {
                      straight_img_thumbnail: rst[0]
                    })
                  });
                });
              });
              return Promise.all(innerPromise).then(function (rs) {
                return _objectSpread(_objectSpread({}, order), {}, {
                  orderItem: rs
                });
              });
            });
            _context2.next = 9;
            return Promise.all(promises);
          case 9:
            fectchresult = _context2.sent;
            resolve({
              data: fectchresult,
              err: 0
            });
          case 11:
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
exports.getOrdersServices = getOrdersServices;
var getOneOrderServices = function getOneOrderServices(_ref4) {
  var order_id = _ref4.order_id;
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var response, order, innerPromise, fetchOrder;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models["default"].Order.findOne({
              nest: true,
              where: {
                id: order_id
              },
              include: [{
                model: _models["default"].OrderItem,
                as: 'orderItem',
                raw: true,
                nested: true,
                order: [['createdAt', 'DESC']],
                nest: true,
                include: [{
                  model: _models["default"].BrandModel,
                  attributes: ['id', 'name'],
                  as: 'model'
                }, {
                  model: _models["default"].Material,
                  attributes: ['id', 'name'],
                  as: 'material'
                }, {
                  model: _models["default"].ProductOption,
                  attributes: ['id', 'name', 'straight_img_thumbnail'],
                  include: [{
                    model: _models["default"].Product,
                    attribute: ['id', 'name', 'price', 'slug'],
                    as: 'product'
                  }],
                  as: 'option'
                }, {
                  model: _models["default"].SaleCampaign,
                  as: 'saleCampaign'
                }]
              }, {
                model: _models["default"].ShippingAddress,
                as: 'shippingAddress'
              }]
            });
          case 3:
            response = _context3.sent;
            order = JSON.parse(JSON.stringify(response));
            console.log('rs order la', response);
            innerPromise = order.orderItem.map(function (orderItem) {
              return (0, _getProductImage.getProductImage)("Products/Medium/straight image thumbnail/".concat(orderItem.option.straight_img_thumbnail, ".png")).then(function (rst) {
                return _objectSpread(_objectSpread({}, orderItem), {}, {
                  option: _objectSpread(_objectSpread({}, orderItem.option), {}, {
                    straight_img_thumbnail: rst[0]
                  })
                });
              });
            });
            _context3.next = 9;
            return Promise.all(innerPromise).then(function (rs) {
              return _objectSpread(_objectSpread({}, order), {}, {
                orderItem: rs
              });
            });
          case 9:
            fetchOrder = _context3.sent;
            resolve({
              data: fetchOrder,
              err: 0
            });
            _context3.next = 16;
            break;
          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", reject(new _InvalidParamError["default"]('Order khong tồn tại')));
          case 16:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 13]]);
    }));
    return function (_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }());
};
exports.getOneOrderServices = getOneOrderServices;
var updateOrderServices = function updateOrderServices(orderInfo) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _models["default"].Order.update(_objectSpread({}, orderInfo), {
              where: {
                id: orderInfo.id
              }
            });
          case 2:
            response = _context4.sent;
            response[0] ? resolve({
              err: 0,
              msg: 'Update Order thành công'
            }) : reject(new _InvalidParamError["default"]('Không tìm thấy Order tương ứng'));
          case 4:
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
exports.updateOrderServices = updateOrderServices;
var deleteOrderServices = function deleteOrderServices(_ref7) {
  var id = _ref7.id;
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            console.log('detete id là', id);
            _context5.next = 3;
            return _models["default"].Order.update({
              status: 'Cancel'
            }, {
              where: {
                id: id,
                status: 'Created'
              }
            });
          case 3:
            response = _context5.sent;
            response[0] ? resolve({
              err: 0,
              msg: 'Update Order thành công'
            }) : reject(new _InvalidParamError["default"]('Không tìm thấy Order tương ứng'));
          case 5:
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
exports.deleteOrderServices = deleteOrderServices;
//# sourceMappingURL=order.js.map