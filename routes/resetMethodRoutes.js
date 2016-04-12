var responseMessages = require(__dirname + '/../lib/response-messages.js');
var logger = require(__dirname + '/../lib/logger.js');

function response(res, statusMessage){
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(statusMessage.statusCode);
  res.write(JSON.stringify(statusMessage));
  res.end();
}

function restResponseHandler(method, action){
  return function(req, res){
    if (req.method === method){
      action(req, (statusMessage) => {
        response(res, statusMessage);
      });
    }
  };
}

function noBodyHandler(req, callback){
  // print headers
  logger.printReqHeaders(req);

  // callback with successMessage
  callback(responseMessages.success);
  return;
}

function jsonBodyHandler(req, callback){
  logger.printReqHeaders(req);

  // try to parse json callback success or callback jsonerror
  logger.printReqBody(req, (err) => {
    if (err) return callback(responseMessages.invalidJSON);
    callback(responseMessages.success);
  });
}

function timeoutResponse(req, res){
  response(res, responseMessages.timeout);
}

exports.getResponse    = restResponseHandler('GET', noBodyHandler);
exports.postResponse   = restResponseHandler('POST', jsonBodyHandler);
exports.putResponse    = restResponseHandler('PUT', jsonBodyHandler);
exports.patchResponse  = restResponseHandler('PATCH', jsonBodyHandler);
exports.deleteResponse = restResponseHandler('DELETE', jsonBodyHandler);
exports.timeout        = timeoutResponse;
