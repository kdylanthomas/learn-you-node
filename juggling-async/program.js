// uses a for loop to call function three times

var http = require('http')
var concat = require('concat-stream')

var results = [];
var numComplete = 0;

function printResults () {
	for (var i = 0; i < 3; i++) {
		console.log(results[i]);
	}
}

function getData (i) {
	http.get(process.argv[2 + i], function (response) {
		response.pipe(concat(function (data) {
			results[i] = data.toString();
			numComplete++;
			if (numComplete === 3) printResults();
		}));
		response.on("error", console.error);
	}).on('error', console.error);
}

for (var i = 0; i < 3; i++) {
	getData(i);
}