// goal: use an async operation to produce
// results from previous exercise

var fs = require('fs');

// passing 'utf8' as second arg returns data as string
fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err) throw err;
	console.log(data.split('\n').length - 1);
});
