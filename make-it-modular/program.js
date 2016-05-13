// goal: make a modular version of the filtered files exercise

// note to self: fs & path requires go in the module w/ the function
// that uses them, not the module that calls the function

var fs = require('fs');
var path = require('path');

function modularFileFiltering() {
	var dir = process.argv[2];
	var ext = '.' + process.argv[3];

	fs.readdir(dir, function (err, list) {
		if (err) throw err;
		list.forEach(function (el, i) {
			if (path.extname(el) === ext) {
				console.log(el);
			}
		});
	});
}

module.exports = modularFileFiltering;