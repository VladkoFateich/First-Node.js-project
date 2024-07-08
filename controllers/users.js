const getUsersHandler = (req, res) => {
  console.log('load users PAGE');
  res.send(
    '<h2>Users</h2><ol>Users list<li>Ivanov Ivan Ivanovoch</li><li>Petrov Petr Petrovich</li><li>Sidorov Sidor Sidorovich</li></ol>'
  );
};
const getSingleUserHandler = (req, res) => {
  console.log('load single user PAGE');
  res.send('<h2>Single user</h2><ol><li>Ivanov Ivan Ivanovoch</li></ol>');
};
const postUserHandler = (req, res) => {
  console.log('load post user PAGE');
  res.send(
    '<h2>Add user</h2><form><input placeholder = "name"/><input placeholder = "patronymic"/><input placeholder = "name"/></form><button>Add user</button>'
  );
};

module.exports = {
  getUsersHandler,
  getSingleUserHandler,
  postUserHandler,
};
