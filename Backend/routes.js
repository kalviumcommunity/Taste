const express = require('express');
const router = express.Router();
const FoodCombo = require('./model/UserItem'); 
const { comboValidationSchema } = require("./validation");
const User = require('./model/Users');


const validateRequest = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((detail) => detail.message),
    });
  }
  next();
};

router.post('/combos', validateRequest(comboValidationSchema), async (req, res) => {
  try {
    const { comboName, ingredients, description, votes, submittedBy } = req.body;
    const newCombo = new FoodCombo({ comboName, ingredients, description, votes, submittedBy });
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
    if (!combo) {
      return res.status(404).json({ message: 'Combo not found' });
    }
    res.json(combo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/combos/:id', validateRequest(comboValidationSchema), async (req, res) => {
  try {
    const { comboName, ingredients, description, votes, submittedBy } = req.body;
    const updatedCombo = await FoodCombo.findByIdAndUpdate(
      req.params.id,
      { comboName, ingredients, description, votes, submittedBy },
      { new: true }
    );
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
    if (!deletedCombo) {
      return res.status(404).json({ message: 'Combo not found' });
    }
    res.json({ message: 'Combo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get all users for the dropdown menu
router.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Get all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get food combos created by a particular user
router.get('/foodCombos/:userId', async (req, res) => {
  try {
    const foodCombos = await FoodCombo.find({ created_by: req.params.userId }).populate('created_by');
    res.json(foodCombos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;