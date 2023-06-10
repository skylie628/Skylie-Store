"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var instance = _axios["default"].create({
  baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5000"
});
instance.interceptors.request.use(function (config) {
  var _JSON$parse, _JSON$parse$userToken;
  // Do something before request is sent
  console.log('persited token', window.localStorage.getItem('persist:root'));
  var token = window.localStorage.getItem('persist:root') && ((_JSON$parse = JSON.parse(localStorage.getItem('persist:root'))) === null || _JSON$parse === void 0 ? void 0 : (_JSON$parse$userToken = _JSON$parse.userToken) === null || _JSON$parse$userToken === void 0 ? void 0 : _JSON$parse$userToken.slice(1, -1));
  config.headers = {
    authorization: "Bearer ".concat(token)
  };
  console.log(config.headers);
  return config;
}, function (error) {
  console.log("intercepters err");
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
var _default = instance;
exports["default"] = _default;
//# sourceMappingURL=axiosConfig.js.map