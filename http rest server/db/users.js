let users = [
  {id: 000001, name: "Max", mail: "max@gmail.com"},
  {id: 000002, name: "Max", mail: "max@gmail.com"},
  {id: 000003, name: "Max", mail: "max@gmail.com"},
  {id: 000004, name: "Max", mail: "max@gmail.com"}
]

getUsers = () => {
  return users;
}

const Users = () => {}

Users.prototype.getUsers = getUsers;


module.exports = new Users();