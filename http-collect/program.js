// goal: make GET request to url provided as command line arg
// collect all data, then console.log # chars and complete string of chars

var http = require('http')

var url = process.argv[2];
var fullBuffer = "";

http.get(url, function (response) {
	response.on("data", function (data) {
		fullBuffer += data;
	});
	response.on("error", console.error);
	response.on("end", function () {
		var fullString = fullBuffer.toString('utf8');
		console.log(fullString.length);
		console.log(fullString);
	})
}).on('error', console.error);
