const http = require('http')

const requestListner = function(req, res) {
  res.writeHead(200)
  res.end('Hello World!')
}

const server = http.createServer(requestListner)

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})