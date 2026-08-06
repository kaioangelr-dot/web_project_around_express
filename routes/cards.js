const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { getCards, createCard, deleteCard } = require('../controllers/cards');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', getCards);
router.post('/cards', createCard);
router.delete('/cards', deleteCard);

module.exports = router;
