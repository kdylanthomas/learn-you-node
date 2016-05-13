var fs = require('fs');

// goal: read a file and print the number
// of new lines it contains to the console

// stores contents of file in argument to text, a Buffer obj
var text = fs.readFileSync(process.argv[2])

// converts Buffer obj to string, then to array split by new lines
var numLines = text.toString().split('\n').length - 1;

console.log(numLines);
