var modularFileFiltering = require('./program');

// try to replicate a callback pattern
var dir = process.argv[2];
var ext = '.' + process.argv[3];

// anon function (err, list) is a callback as third argument
modularFileFiltering(dir, ext, function (err, list) {
	if (err) {
		return console.error(err);
	}
	list.forEach(function (el, i) { // list only contains matches because of callback
		console.log(el);
	});
})