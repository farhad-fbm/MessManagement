// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipesController = require('../controllers/recipeController');

// Routes to handle recipes
router.get('/recipes/:startDate/:endDate', recipesController.getRecipesByDateRange);
router.post('/recipes', recipesController.addRecipe);
router.patch('/recipes/:id', recipesController.updateRecipe);

module.exports = router;
