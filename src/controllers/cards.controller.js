const express = require("express");
const router = express.Router();

const Card = require("../models/cards");

// Get All 
router.get('/', async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
});

// Save Cards
router.post('/' , async (req, res) => {
    const { title , description, url, type } = req.body;
    const card = new Card({
        title,
        description,
        url, 
        type
    });
    await card.save();
    console.log("Card" , card);
    res.json({ message : 'Card saved' , id: card._id});
});

router.put('/:id' , async (req, res) => {
    const { title , description, url, type } = req.body;
    const card = {
        title,
        description,
        url, 
        type
    };

    await Card.findOneAndUpdate(req.body.id, card);
    res.json({ message : 'Card Updated'});
});


module.exports = router;