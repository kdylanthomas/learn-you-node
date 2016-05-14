var http = require('http')

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

function returnUrlData (url) {
	return new Promise(function (resolve, reject) {
		var fullBuffer = "";

		http.get(url, function (response) {
			response.on("data", function (data) {
				fullBuffer += data;
			});
			response.on("error", console.error);
			response.on("end", function () {
				var fullString = fullBuffer.toString('utf8');
				console.log(fullString);
				resolve(fullString);
			});
		}).on('error', console.error);
	});

}

returnUrlData(url1)
.then(function (fullString) {
	return returnUrlData(url2)})
.then(function (fullString) {
	return returnUrlData(url3)});