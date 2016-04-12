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

function authorize(req, callback){
  const authHeader = req.headers.authorization;
  if (authHeader){
    const base64  = authHeader.split(' ')[1];
    const authString = new Buffer(base64, 'base64').toString('utf8');
    if (authString === 'testuser:password') {
      return callback();
    }
    console.log('user not authorized');
    callback(new Error('not authorized'));
  }
}

function authNoBodyHandler(req, callback){
  // print headers
  logger.printReqHeaders(req);
  
  authorize(req, (err) => {
    if (err) return callback(responseMessages.unauthorized);
    callback(responseMessages.success);
  });
}

function authJSONBodyHandler(req, callback){
  logger.printReqHeaders(req);

  // try to parse json callback success or callback jsonerror
  authorize(req, (err) => {
    if (err) return callback(responseMessages.unauthorized);
    logger.printReqBody(req, (err) => {
      if (err) return callback(responseMessages.invalidJSON);
      callback(responseMessages.success);
    });
  });
}

exports.getResponse    = restResponseHandler('GET', authNoBodyHandler);
exports.postResponse   = restResponseHandler('POST', authJSONBodyHandler);
exports.putResponse    = restResponseHandler('PUT', authJSONBodyHandler);
exports.patchResponse  = restResponseHandler('PATCH', authJSONBodyHandler);
exports.deleteResponse = restResponseHandler('DELETE', authJSONBodyHandler);
