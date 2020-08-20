const http = require('http')

// create server object
const requestListner = (req, res) => {
  res.writeHead(200) // response header
  res.end('Hello World!') // respose message
}

const server = http.createServer(requestListner)

// server listens in port 8080
server.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})