var net = require('net');

net.createServer(function (socket) {
	var dateToPrint = getDate();
	socket.write(dateToPrint +"\n");
	socket.end();
}).listen(process.argv[2]);

function fillZeros (num) {
	if (num.toString().length === 1) {
		num = "0" + num;
	}
	return num;
}

function getDate () {
	var date = new Date();
	return date.getFullYear() + "-"
		+ fillZeros(date.getMonth() + 1) + "-"
		+ fillZeros(date.getDate()) + " "
		+ fillZeros(date.getHours()) + ":"
		+ fillZeros(date.getMinutes());
}