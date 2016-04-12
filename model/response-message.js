// define model for response messages

module.exports = function(code, msg){
  this.statusCode = code;
  this.message = msg;
};
