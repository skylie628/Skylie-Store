"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowCrossDomain = void 0;
var allowCrossDomain = function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
exports.allowCrossDomain = allowCrossDomain;
//# sourceMappingURL=corsConfig.js.map