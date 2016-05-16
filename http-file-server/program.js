var fs = require('fs');
var http = require('http');

// goal: http server that serves a text file on each request

var server = http.createServer(function (request, response) {
	// opens the provided file as a stream
	var stream = fs.createReadStream(process.argv[3]);
	// begin piping if stream is valid
	stream.on('open', function () {
		// this pipes the read stream to the response (what you see when you run the program)
		stream.pipe(response);
	});
}).listen(process.argv[2]);
