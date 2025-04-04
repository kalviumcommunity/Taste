
// const mongoose = require('mongoose');

// const foodComboSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   ingredients: { type: [String], required: true },
//   created_by: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User', 
//     required: true
//   },
// });

// const FoodCombo = mongoose.model('FoodCombo', foodComboSchema);
// module.exports = FoodCombo;


const mongoose = require('mongoose');

const foodComboSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  imageUrl: { type: String, required: true }, 
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

const FoodCombo = mongoose.model('FoodCombo', foodComboSchema);
module.exports = FoodCombo;

