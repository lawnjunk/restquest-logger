#!/usr/bin/env node
'use strict';
const http = require('http');
const response = require(__dirname + '/lib/response.js');
const logger = require(__dirname + '/lib/logger.js');

const port = process.env.PORT || 7070; 

const server = http.createServer((req, res) => {
  logger.printReqHeaders(req);
  
  if (req.method === 'GET'){
    response.reqBodyNo(res);
    return;
  }

  req.on('end', () => {
    console.log('wedone slone');
  });

  req.on('data', (data) => {
    logger.printReqBody(data, (err) => {
      if (err) return response.reqBodyBad(res);
      response.reqBodyOk(res);
    });
  });
});

server.listen(port, function(){
  console.log('request-loger is running on port:', port);
});
