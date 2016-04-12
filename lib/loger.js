const colorify = require(__dirname + '/colorify.js');

function prettyPrintKeyValue(key, value, c1, c2){
  const colen = colorify('magenta', ':');
  console.log(colorify(c1, key) +  colen + ' ' + colorify(c2,value)); 
}

function printReqHeaders(req){
  prettyPrintKeyValue('METHOD', req.method, 'green', 'white');
  prettyPrintKeyValue('URL', req.url, 'green', 'white');
  prettyPrintKeyValue('HTTP VERSION', req.httpVersion,  'green', 'white');
  for (var key in req.headers) {
    prettyPrintKeyValue(key, req.headers[key], 'white', 'cyan');
  }
  console.log();
}

function printReqBody(data, cb) {
  try {
    const validJSONString = JSON.stringify(JSON.parse(data),null, 2);
    console.log(colorify('white', validJSONString));
    console.log();
    cb(null);
  } catch (e) {
    console.error(colorify('red', e));
    console.log();
    cb(e);
  }
}

exports.printReqBody = printReqBody;
exports.printReqHeaders = printReqHeaders;

