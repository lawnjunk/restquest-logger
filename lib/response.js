function reqBodyOk(res) {
  res.setHeader('Content-type', 'text/html');
  res.writeHead(200);
  res.write('You sent vaild JSON');
  res.end();
}

function reqBodyBad(res) {
  res.setHeader('Content-type', 'text/html');
  res.writeHead(401);
  res.write('You sent bad JSON');
  res.end();
}

function reqBodyNo(res){
  res.setHeader('Content-type', 'text/html');
  res.writeHead(200);
  res.write('You sent no body.');
  res.end();
}


exports.reqBodyOk = reqBodyOk;
exports.reqBodyBad = reqBodyBad;
exports.reqBodyNo = reqBodyNo;
