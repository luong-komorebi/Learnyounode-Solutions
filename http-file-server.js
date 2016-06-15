var http = require('http');
var fs = require('fs');
var portNumber = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function callback(request, response) {
	response.writeHead(200, {
		'content-type': 'text/plain'
	});
	fs.createReadStream(file).pipe(response);
});
server.listen(portNumber);