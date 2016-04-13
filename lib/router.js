var logger = require(__dirname + '/logger.js');
var statusMessages = require(__dirname + '/response-messages.js');

function clearWindow(){
  process.stdout.write('\033c');
}

function respond(res, statusMessage){
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(statusMessage.statusCode);
  res.write(JSON.stringify(statusMessage));
  res.end();
}

function authorize(req, callback){
  const authHeader = req.headers.authorization;
  if (authHeader){
    const base64 = authHeader.split(' ')[1];
    const authStr = new Buffer(base64, 'base64').toString('utf8');
    if (authStr === 'testuser:password'){
      return callback();
    }
    console.log('user is unauthorized\n');
    return callback(new Error('not authorized'));
  }
}

function processRequest(req, res){
  if (req.method === 'GET'){
    return respond(res, statusMessages.success);
  }

  logger.printReqBody(req, (err) => {
    if (err) return respond(res, statusMessages.invalidJSON);
    respond(res, statusMessages.success);
  });
}

module.exports = function(req, res){
  clearWindow();
  logger.printReqHeaders(req);

  if (req.url.startsWith('/auth')){
    authorize(req, (err) => {
      if (err) return respond(res, statusMessages.unauthorized);
      processRequest(req, res);
    });
  } else {
    processRequest(req,res);
  }
};

