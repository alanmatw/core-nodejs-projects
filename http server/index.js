// import package
const http = require('http');

// create server object
const requestListner = (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'}); // response header
  res.write('Hello World!'); // response msg
  res.end(); // response end
}

// create server
const server = http.createServer(requestListner);

// define port
const port = 8080;

server.listen(port, () => {
    console.log('Server running on http://localhost:8080');
})