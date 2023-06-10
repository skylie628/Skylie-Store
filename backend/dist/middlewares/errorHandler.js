"use strict";

var errorHandler = function errorHandler(err, req, res, next) {
  console.log('ERROR LOG ', new Date().toLocaleString());
  console.log('Request:', req.method, req.originalUrl);
  console.log('Params:', req.params);
  console.log('Body:', req.body);
  console.log('Query:', req.query);
  console.log('Error: ', err);
  console.log('Error stack: ', err.stack);
  console.log("--------------------------------------------------------------------------------------");
  var messageError = err.messageObject || err.message;
  // create format error response
  var error = {
    err: -1,
    errors: messageError
  };
  var status = err.status || 400;
  return res.status(status).json(error);
};
module.exports = errorHandler;
//# sourceMappingURL=errorHandler.js.map