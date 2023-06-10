"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountFirebase.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "skylie-store.appspot.com"
});
var _default = admin;
exports["default"] = _default;
//# sourceMappingURL=connectFirebase.js.map