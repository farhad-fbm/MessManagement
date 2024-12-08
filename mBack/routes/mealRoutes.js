//routes/mealRoutes.js

const express = require('express');
const router = express.Router();
const mealsController = require('../controllers/mealsController');

// GET: Daily total meals for all users (Breakfast, Lunch, Dinner)
router.get('/dailyAllUsersTotal/:date/:month/:year', mealsController.getDailyAllUsersTotal);

// GET: Daily total meals for a specific user (Breakfast, Lunch, Dinner)
router.get('/dailySpecificUserTotal/:date/:month/:year/:memberName', mealsController.getDailySpecificUserTotal);

// GET: Monthly total meals for all users (Breakfast + Lunch + Dinner)
router.get('/monthlyAllUsersTotal/:month/:year', mealsController.getMonthlyAllUsersTotal);

// GET: Monthly total meals for every user (Breakfast + Lunch + Dinner)
router.get('/monthlyEveryUserTotal/:month/:year', mealsController.getMonthlyEveryUserTotal);

// Route to get daily all members' meal data
router.get('/dailyAllMembersMeal/:date/:month/:year', mealsController.getDailyAllMembersMeal);


// PUT: Update meal data for a specific date and user
router.put('/updateMeal/:date/:month/:year/:memberName', mealsController.updateMeal);

module.exports = router;
