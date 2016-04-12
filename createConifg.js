const fs = require('fs');

var configConstructors = require(__dirname + '/model/config');
var LoggerConfig = configConstructors.LoggerConfig;
var RouteConfig = configConstructors.RouteConfig;

const config = new LoggerConfig('example-config', 6000);

const getUserRoute = new RouteConfig('/user', 'GET');
getUserRoute.addHeader('test', 'lulwat');
config.addRoute(getUserRoute);

const postUserRoute = new RouteConfig('/user', 'POST');
config.addRoute(postUserRoute);

const deleteUserRoute = new RouteConfig('/user', 'DELETE');
deleteUserRoute.addHeader('test', 'lulwat');
config.addRoute(deleteUserRoute);

console.log(JSON.stringify(config));


fs.writeFile('config.json', JSON.stringify(config, null, 2));
