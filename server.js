#!/usr/bin/env node

const http = require('http');
const router = require(__dirname + '/lib/router');
const port = process.env.PORT || 7070; 

const server = http.createServer(router);
server.timeout = 200;

server.listen(port, function(){
  console.log('request-logger is running on port:', port);
});
