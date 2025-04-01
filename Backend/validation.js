const Joi = require('joi');

const comboValidationSchema = Joi.object({
  comboName: Joi.string().trim().required(),
  ingredients: Joi.array()
    .items(Joi.string().trim().pattern(/^[A-Za-z\s]+$/)) // Ensures only words (no numbers or special characters)
    .min(1)
    .required(),
  description: Joi.string().trim().min(20).required(), // Ensures at least 20 characters
  votes: Joi.number().integer().min(0).default(0),
  submittedBy: Joi.string().trim().required(),
});

module.exports = { comboValidationSchema };



// const Joi = require('joi');

// const comboValidationSchema = Joi.object({
//   comboName: Joi.string().trim().required().messages({
//     "string.empty": "Combo name is required.",
//   }),

//   ingredients: Joi.array()
//     .items(Joi.string().trim().required())
//     .min(2)
//     .required()
//     .messages({
//       "array.min": "At least 2 ingredients are required.",
//       "any.required": "Ingredients field is required.",
//     }),

//   description: Joi.string().trim().min(20).required().messages({
//     "string.empty": "Description is required.",
//     "string.min": "Description must be at least 20 characters long.",
//   }),

//   votes: Joi.number().integer().min(0).required().messages({
//     "number.base": "Votes must be a number.",
//     "number.integer": "Votes must be an integer.",
//     "number.min": "Votes cannot be negative.",
//     "any.required": "Votes field is required.",
//   }),

//   submittedBy: Joi.string().trim().required().messages({
//     "string.empty": "Submitted by is required.",
//   }),
// });

// module.exports = { comboValidationSchema };
