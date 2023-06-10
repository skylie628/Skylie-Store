"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _unauthorizedError = _interopRequireDefault(require("../errors/unauthorizedError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var verifyToken = function verifyToken(req, res, next) {
  var _req$headers$authoriz;
  var accessToken = (_req$headers$authoriz = req.headers.authorization) === null || _req$headers$authoriz === void 0 ? void 0 : _req$headers$authoriz.split(' ')[1];
  if (!accessToken) {
    throw new _unauthorizedError["default"]('Thiếu access token');
  }
  _jsonwebtoken["default"].verify(accessToken, process.env.SECRET_KEY, function (err, user) {
    if (err) return res.status(404).json({
      err: -1,
      msg: 'access token expired'
    });
    console.log("user la", user);
    req.user = user;
    next();
  });
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map