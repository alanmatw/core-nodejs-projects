const http = require('http');

const Users = require('./db/users');

// define port
const port = 8080;

// create server
const server = http.createServer((req, res) => {

  if(req.method == 'GET') {
    handleGet(req, res);
  } else if(req.method == 'POST') {
    handlePost(req, res);
  } else if(req.method == 'PUT') {
    handlePut(req, res);
  } else if(req.method == 'DELETE') {
    handleDelete(req, res);
  }

}).listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

// fn to handle GET
handleGet = (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
  return res.end(JSON.stringify(Users.getUsers()));
}

// fn to handle POST
handlePost = (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
}

// fn to handle PUT
handlePut = (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
}

// fn to handle DELETE
handleDelete = (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
}