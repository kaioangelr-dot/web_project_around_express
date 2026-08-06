const card = require('../models/card');

module.exports.getCards = (req, res) => {
  /* prettier-ignore */
  card.find({}).then((cards) => res.send({ data: cards }))
    .catch((err) => res.status(500).send({ message: 'Error reading the cards' }));
};

module.exports.createCard = (req, res) => {
  const { name, link, owner } = req.body;

  /* prettier-ignore */
  card.create({ name, link, ownerId: owner })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: 'Card was not created' }));
};

module.exports.deleteCard = (req, res) => {
  /* prettier-ignore */
  card.findById(req.params.id)
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: 'Card does not exist' }));
};
