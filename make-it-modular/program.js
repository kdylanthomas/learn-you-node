// goal: make a modular version of the filtered files exercise

// note to self: fs & path requires go in the module w/ the function
// that uses them, not the module that calls the function

var fs = require('fs');
var path = require('path');

function modularFileFiltering(dir, ext, callback) {

	fs.readdir(dir, function (err, list) {
		var matches = [];
		if (err) return callback(err);
		list.forEach(function (el, i) {
			if (path.extname(el) === ext) {
				matches.push(el);
			}
		});
		callback(null, matches); // pass null as error
	});

}

module.exports = modularFileFiltering;