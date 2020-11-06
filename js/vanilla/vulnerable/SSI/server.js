const http = require('http');
const url = require('url');
const util = require('util');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type':'text/html'});
  const params = url.parse(request.url, true).query;
  
  response.write('<html><head><meta charset="utf-8" /><title>Test</title></head><body>');
  const a = eval(params.a); // < eval is dangerous!!!
  const b = eval(params.b); // < don't do this at home.
  const s = a + b;
  
  response.write(`Result ${a} + ${b} = ${s}`);
  response.write('</body></html>');
  response.end();
}).listen(3000);
