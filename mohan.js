var http = require('mohan');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Mohan!');
}).listen(9090);