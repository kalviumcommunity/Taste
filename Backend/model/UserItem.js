// const mongoose = require('mongoose');

// const foodComboSchema = new mongoose.Schema({
//   comboName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   ingredients: {
//     type: [String], 
//     required: true
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   votes: {
//     type: Number,
//     default: 0
//   },
//   submittedBy: { 
//     type: String,
//     required: true,
//     trim: true
//   },
//   created_by: {
//     type: String,  // You could also use ObjectId if you're using a User model
//     required: true,
//   }
// }, {
//   timestamps: true 
// });

// const FoodCombo = mongoose.model('FoodCombo', foodComboSchema);

// module.exports = FoodCombo;


// models/FoodCombo.js
const mongoose = require('mongoose');

const foodComboSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
});

const FoodCombo = mongoose.model('FoodCombo', foodComboSchema);
module.exports = FoodCombo;

