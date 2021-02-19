const Cards = require("../models/cards.json");

//get all cards
exports.getCards = (req, res) => {
    return res.json(Cards)
}

//get one card by id
exports.getCardByID = (req, res) => {
    const { id } = req.params
    res.json(Cards.filter(card => card.id === parseInt(id)))
}

//add a new card to the list 
exports.addCard = (req, res) => {
    const body = req.body
    Cards.push(body)
    res.json({ message: 'A new card has been added!' })
}

//update an existing card in the list
exports.updateCard = (req, res) => {
    const { id } = req.params
    const body = req.body
    Cards.map((card, idx) => { if (card.id === parseInt(id)) Cards[idx] = body })
    res.json({ message: `The card with ID ${id} has been updated!` })
}

//remove a card from the list
exports.removeCard = (req, res) => {
    const { id } = req.params
    Cards.map((card, idx) => { if (card.id === parseInt(id)) Cards.splice(idx) })
    res.json({ message: `The card with ID ${id} has been deleted!` })
}