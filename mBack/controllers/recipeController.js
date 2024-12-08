// controllers/recipesController.js
const Recipe = require('../models/recipe');

// Get recipes by date range
exports.getRecipesByDateRange = async (req, res) => {
  const { startDate, endDate } = req.params;

  try {
    const recipes = await Recipe.find({
      $and: [
        { date: { $gte: parseInt(startDate.split('-')[0]) } },
        { month: { $gte: parseInt(startDate.split('-')[1]) } },
        { year: { $gte: parseInt(startDate.split('-')[2]) } },
        { date: { $lte: parseInt(endDate.split('-')[0]) } },
        { month: { $lte: parseInt(endDate.split('-')[1]) } },
        { year: { $lte: parseInt(endDate.split('-')[2]) } },
      ],
    });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new recipe
exports.addRecipe = async (req, res) => {
  const { date, month, year, breakfast, lunch, dinner } = req.body;

  try {
    const newRecipe = new Recipe({ date, month, year, breakfast, lunch, dinner });
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a recipe by ID
exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { breakfast, lunch, dinner } = req.body;

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { breakfast, lunch, dinner },
      { new: true }
    );
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
