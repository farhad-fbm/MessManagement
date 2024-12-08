// models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the dish
  description: { type: String, required: true }, // Description in Bangla
});

const dayRecipeSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  breakfast: [recipeSchema],
  lunch: [recipeSchema],
  dinner: [recipeSchema],
});

module.exports = mongoose.model('Recipe', dayRecipeSchema);
