const express = require("express");
const { getCards, getCardByID, addCard, updateCard, removeCard } = require("../controllers/cards");

const router = express.Router();

//router.get("/", getCards);
router
    .route('/')
    .get(getCards)
    .post(addCard);

router
    .route('/:id')
    .get(getCardByID)
    .put(updateCard)
    .delete(removeCard);

module.exports = router;