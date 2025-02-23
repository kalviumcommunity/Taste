const mongoose = require('mongoose');
const foodComboSchema = new mongoose.Schema({
  comboName: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: {
    type: [String], 
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  votes: {
    type: Number,
    default: 0
  },
  submittedBy: { 
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true 
});

const FoodCombo = mongoose.model('FoodCombo', foodComboSchema);

module.exports = FoodCombo;
