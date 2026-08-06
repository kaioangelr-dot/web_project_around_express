const user = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  /* prettier-ignore */
  user.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: 'Error reading the users' }));
};

module.exports.getUser = (req, res) => {
  /* prettier-ignore */
  user.findById(req.params.id).orFail()
    .then((user) => res.send({ data: user }))
    .catch((err) =>{
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'User not found' });
      }
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'User ID invalid format' });
      }
      return res.status(500).send({ message: 'User ID not found' })
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  /* prettier-ignore */
  user.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'CastError') {
      return res.status(400).send({ message: 'Invalid data' });
      }
      return res.status(500).send({ message: 'User was not created' })
    });
};
