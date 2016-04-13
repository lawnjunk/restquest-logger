var ResponseMessage = require(__dirname + '/../model/response-message.js');
debugger;
var responseMessages = {};
responseMessages.success = new ResponseMessage(200, 'Success');
responseMessages.invalidJSON = new ResponseMessage(400, 'Invalid JSON');
responseMessages.badRequest = new ResponseMessage(400, 'Bad Request');
responseMessages.unauthorized = new ResponseMessage(401, 'Unauthorized');
responseMessages.forbidden = new ResponseMessage(403, 'Forbidden');
responseMessages.notFount = new ResponseMessage(404, 'Not Found');
responseMessages.timeout = new ResponseMessage(408, 'Request Timeout');

module.exports = responseMessages;
