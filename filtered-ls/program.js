// goal: print list of files in a given directory, filtered by extensions

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
	if (err) throw err;
	list.forEach(function (el, i) {
		if (path.extname(el) === ext) {
			console.log(el);
		}
	});
