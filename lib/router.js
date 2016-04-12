const restMethodRoutes = require(__dirname + '/../routes/resetMethodRoutes.js');

module.exports = function(req, res){
  restMethodRoutes.getResponse(req, res);
  restMethodRoutes.postResponse(req, res);
  restMethodRoutes.putResponse(req, res);
  restMethodRoutes.patchResponse(req, res);
  restMethodRoutes.deleteResponse(req, res);
};
