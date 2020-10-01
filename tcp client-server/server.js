// import net package
var net = require('net');

// create server
var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});


// server listening at port 1337
server.listen(1337, '127.0.0.1');
