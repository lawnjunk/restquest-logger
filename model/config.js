function RouteConfig(endpoint, method, auth){
  this.endpoint = endpoint;
  this.method = method;
  this.auth = auth || false;
  this.querys = [];
  this.headers = [];
}

RouteConfig.prototype.addHeader = function(key, value){
  var header = {
    key: key,
    value: value
  };

  this.headers.push(header);
};

RouteConfig.prototype.addQuery = function(key, value){
  var query= {
    key: key,
    value: value
  };

  this.headers.push(query);
};

function LoggerConfig(name, port){
  this.name = name;
  this.port = port;
  this.routes = [];
}

LoggerConfig.prototype.addRoute = function (route){
  this.routes.push(route);
};

exports.LoggerConfig = LoggerConfig;
exports.RouteConfig = RouteConfig;
