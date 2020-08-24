const http = require('http');

const Users = require('./db/users') 

// define port
const port = 8080;

// create server
const server = http.createServer((req, res) => {

  if(req.url == '/' && req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    res.write(JSON.stringify(Users.getUsers()));
    res.end();
  }

}).listen(port, () => {
  console.log(`Server is running on port ${port}`);
})