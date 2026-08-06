const user = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  /* prettier-ignore */
  user.find({}).then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: 'Error reading the users' }));
};

module.exports.getUser = (req, res) => {
  /* prettier-ignore */
  user.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'User ID not found' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  /* prettier-ignore */
  user.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'User was not created' }));
};
