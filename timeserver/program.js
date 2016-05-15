var net = require('net');

net.createServer(function (socket) {
	var date = new Date();
	var YYYY = date.getFullYear();
	var MM = leftPad(date.getMonth() + 1);
	var DD = leftPad(date.getDate());
	var hh = leftPad(date.getHours());
	var mm = leftPad(date.getMinutes());
	socket.write(YYYY+"-"+MM+"-"+DD+" "+hh+":"+mm+"\n");
	socket.end();
}).listen(process.argv[2]);

function fillZeros (num) {
	if (num.toString().length === 1) {
		num = "0" + num;
	}
	return num;
}