const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { getCards, createCard, deleteCard } = require('../controllers/cards');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', getCards);
router.post('/', createCard);
router.delete('/', deleteCard);

module.exports = router;
