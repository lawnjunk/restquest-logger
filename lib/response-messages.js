var ResponseMessage = require(__dirname + '/../model/response-message.js');

var responseMessages = {};
responseMessages.success = new ResponseMessage(200, 'Success');
responseMessages.invalidJSON = new ResponseMessage(400, 'Invalid JSON');
responseMessages.unauthorized = new ResponseMessage(401, 'Unauthorized');

module.exports = responseMessages;
