// import package
const http = require('http')

// create server object
const requestListner = function(req, res) {
  res.writeHead(200) // response header
  res.end('Hello World!') // response end
}

// create server
const server = http.createServer(requestListner)

// server listens in port 8080
server.listen(8080, function() {
    console.log('Server running on http://localhost:8080')
})