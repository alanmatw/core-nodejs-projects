// import net package
var net = require('net');

// create socket
var client = new net.Socket();

// connect to server
client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

// receive from server
client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

// close connection
client.on('close', function() {
	console.log('Connection closed');
});
