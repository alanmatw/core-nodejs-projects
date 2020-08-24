let users = [
  {id: 1, name: "Max", mail: "max@gmail.com"},
  {id: 2, name: "Sam", mail: "sam@gmail.com"},
  {id: 3, name: "Nick", mail: "Nick@gmail.com"},
  {id: 4, name: "Zoe", mail: "zoe@gmail.com"}
]

getUsers = () => {
  return users;
}

saveUsers = (data) => {
  const no = users.length;
  data['id'] = no + 1;
  users.push(data);
}

const Users = function() {}

Users.prototype.getUsers = getUsers;


module.exports = new Users();