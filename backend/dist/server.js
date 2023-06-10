"use strict";

var _express = _interopRequireDefault(require("express"));
var _connectPostgres = _interopRequireDefault(require("./src/config/connectPostgres"));
var _corsConfig = require("./src/config/corsConfig");
var _routes = _interopRequireDefault(require("./src/routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('express-async-errors');
require('dotenv').config();
var cors = require('cors');
var app = (0, _express["default"])();
console.log(process.env.CLIENT_URL);
app.use(cors({
  origin: "http://localhost:3000",
  methods: ['POST', 'GET', 'PUT', 'DELETE']
}));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
(0, _routes["default"])(app);
(0, _connectPostgres["default"])();
var port = process.env.PORT || 8888;
var listener = app.listen(port, function () {
  console.log("server is running on port ", listener.address().port);
});