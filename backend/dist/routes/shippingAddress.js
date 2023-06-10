"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var shippingController = _interopRequireWildcard(require("../controllers/shippingAddress.js"));
var _shippingAddressValidate = require("../validators/shippingAddressValidate.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.post('/', _shippingAddressValidate.shippingAddressValidate.add(), shippingController.addShippingAddress);
router.get('/', _shippingAddressValidate.shippingAddressValidate.get(), shippingController.getShippingAddresses);
router.get('/shippingFee', _shippingAddressValidate.shippingAddressValidate.getFee(), shippingController.getShippingFee);
router.put('/setDefault', _shippingAddressValidate.shippingAddressValidate.setDefault(), shippingController.setDefaultShippingAddress);
router.put('/', _shippingAddressValidate.shippingAddressValidate.update(), shippingController.updateShippingAddress);
router["delete"]('/', _shippingAddressValidate.shippingAddressValidate.drop(), shippingController.deleteShippingAddress);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=shippingAddress.js.map