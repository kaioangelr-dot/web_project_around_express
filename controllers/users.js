const user = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  /* prettier-ignore */
  user.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Server error' }));
};

module.exports.getUser = (req, res) => {
  /* prettier-ignore */
  user.findById(req.params.id).orFail()
    .then((userData) => res.send({ data: userData }))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).send({ message: 'User not found' });
      }
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'User ID invalid format' });
      }
      return res.status(500).send({ message: 'Server error' });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  /* prettier-ignore */
  user.create({ name, about, avatar })
    .then((userData) => res.send({ data: userData }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Invalid data' });
      }
      return res.status(500).send({ message: 'Server error' });
    });
};

module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;

  /* prettier-ignore */
  user.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((userData) => res.send({ data: userData }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Invalid data' });
      }
      return res.status(500).send({ message: 'Server error' });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  /* prettier-ignore */
  user.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((userData) => res.send({ data: userData }))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.status(400).send({ message: 'Invalid data' });
      }
      return res.status(500).send({ message: 'Server error' });
    });
};
