const http = require('http')

const port = 8080

const server = http.createServer((req, res) => {
  if(req.url == '/') {
    res.writeHead(200, {'content-Type': 'text/html'})
    res.write('Hello')
    res.end()
  }
}).listen(port, () => {
  console.log(`Server is running on port ${port}`)
})