const express = require('express');
const router = express.Router();
// The router helps you organize your routes and tells your server what to do when people visit specific URLs(/combos).
const FoodCombo = require('./model/UserItem'); 

router.post('/combos', async (req, res) => {
  try {
    const {comboName,ingredients,description,votes,submittedBy}=req.body;

    const newCombo = new FoodCombo({comboName,ingredients,description,votes,submittedBy});
    const savedCombo = await newCombo.save();
    res.status(201).json(savedCombo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/combos', async (req, res) => {
  try {
    const combos = await FoodCombo.find();
    res.json(combos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/combos/:id', async (req, res) => {
  try {
    const combo = await FoodCombo.findById(req.params.id);
    //  findById-> This function looks for the particular document(data) with the given id and retrieve that document.
    if (!combo) {
      return res.status(404).json({ message: 'Combo not found' });
    }
    res.json(combo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/combos/:id', async (req, res) => {
  try {
    const {comboName,ingredients,description,votes,submittedBy}=req.body;
    const updatedCombo = await FoodCombo.findByIdAndUpdate(
      req.params.id,
      {comboName,ingredients,description,votes,submittedBy},
      { new: true }
    );
        //  findByIdAndUpdate-> This function looks for the particular document(data) with the given id and update that document fields.
        //  req.params.id - gets the id from the url
        //  {comboName,ingredients,description,votes,submittedBy}, => the fields to update
        //   new: true: Returns the updated item instead of the old one.

    if (!updatedCombo) {
      return res.status(404).json({ message: 'Combo not found' });
    }
    res.json(updatedCombo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/combos/:id', async (req, res) => {
  try {
    const deletedCombo = await FoodCombo.findByIdAndDelete(req.params.id);
    //  findByIdAndDelete-> This function looks for the particular document(data) with the given id and delete that document.

    if (!deletedCombo) {
      return res.status(404).json({ message: 'Combo not found' });
    }
    res.json({ message: 'Combo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
