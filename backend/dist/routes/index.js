"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _auth = _interopRequireDefault(require("./auth.js"));
var _shippingAddress = _interopRequireDefault(require("./shippingAddress.js"));
var _brand = _interopRequireDefault(require("./brand.js"));
var _collection = _interopRequireDefault(require("./collection.js"));
var _product = _interopRequireDefault(require("./product.js"));
var _user = _interopRequireDefault(require("./user.js"));
var _order = _interopRequireDefault(require("./order.js"));
var _cartItem = _interopRequireDefault(require("./cartItem.js"));
var _color = _interopRequireDefault(require("./color.js"));
var _series = _interopRequireDefault(require("./series.js"));
var _cart = _interopRequireDefault(require("./cart.js"));
var _model = _interopRequireDefault(require("./model.js"));
var _comment = _interopRequireDefault(require("./comment.js"));
var _savedAlbum = _interopRequireDefault(require("./savedAlbum.js"));
var _savedProduct = _interopRequireDefault(require("./savedProduct.js"));
var _errorHandler = _interopRequireDefault(require("../middlewares/errorHandler.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('express-async-errors');
var initRoutes = function initRoutes(app) {
  app.use('/api/v1/auth', _auth["default"]);
  app.use('/api/v1/shippingAddress', _shippingAddress["default"]);
  app.use('/api/v1/brands', _brand["default"]);
  app.use('/api/v1/user', _user["default"]);
  app.use('/api/v1/admin/collection', _collection["default"]);
  app.use('/api/v1/color', _color["default"]);
  app.use('/api/v1/product', _product["default"]);
  app.use('/api/v1/order', _order["default"]);
  app.use('/api/v1/series', _series["default"]);
  app.use('/api/v1/model', _model["default"]);
  app.use('/api/v1/cart', _cart["default"]);
  app.use('/api/v1/cartItem', _cartItem["default"]);
  app.use('/api/v1/comment', _comment["default"]);
  app.use('/api/v1/savedAlbum', _savedAlbum["default"]);
  app.use('/api/v1/savedProduct', _savedProduct["default"]);
  app.use(_errorHandler["default"]);
  return app.use('/', function (req, res) {
    res.send("not ok");
  });
};
var _default = initRoutes;
exports["default"] = _default;
//# sourceMappingURL=index.js.map