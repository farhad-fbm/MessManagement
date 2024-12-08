// mealsController.js

const Meal = require('../models/dailyMeal');


exports.getDailyAllUsersTotal = async (req, res) => {
  const { date, month, year } = req.params;

  try {
    const meals = await Meal.aggregate([
      { $match: { date: parseInt(date), month: parseInt(month), year: parseInt(year) } },
      {
        $group: {
          _id: null,
          totalBreakfast: { $sum: "$breakfast" },
          totalLunch: { $sum: "$lunch" },
          totalDinner: { $sum: "$dinner" },
        }
      }
    ]);

    res.status(200).json(meals[0] || { totalBreakfast: 0, totalLunch: 0, totalDinner: 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDailySpecificUserTotal = async (req, res) => {
  const { date, month, year, memberName } = req.params;

  try {
    const meals = await Meal.aggregate([
      { $match: { date: parseInt(date), month: parseInt(month), year: parseInt(year), memberName } },
      {
        $group: {
          _id: null,
          totalBreakfast: { $sum: "$breakfast" },
          totalLunch: { $sum: "$lunch" },
          totalDinner: { $sum: "$dinner" },
        }
      }
    ]);

    res.status(200).json(meals[0] || { totalBreakfast: 0, totalLunch: 0, totalDinner: 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMonthlyAllUsersTotal = async (req, res) => {
  const { month, year } = req.params;

  try {
    const meals = await Meal.aggregate([
      { $match: { month: parseInt(month), year: parseInt(year) } },
      {
        $group: {
          _id: null,
          totalBreakfast: { $sum: "$breakfast" },
          totalLunch: { $sum: "$lunch" },
          totalDinner: { $sum: "$dinner" },
        }
      }
    ]);

    res.status(200).json(meals[0] || { totalBreakfast: 0, totalLunch: 0, totalDinner: 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getMonthlyEveryUserTotal = async (req, res) => {
  const { month, year } = req.params;

  try {
    const meals = await Meal.aggregate([
      { $match: { month: parseInt(month), year: parseInt(year) } },
      {
        $group: {
          _id: "$memberName",
          totalBreakfast: { $sum: "$breakfast" },
          totalLunch: { $sum: "$lunch" },
          totalDinner: { $sum: "$dinner" },
        }
      }
    ]);

    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getDailyAllMembersMeal = async (req, res) => {
  const { date, month, year } = req.params;

  try {
    const meals = await Meal.find({ date, month, year }); // Fetch data for the given day
    const result = meals.map((meal) => ({
      memberName: meal.memberName,
      breakfast: meal.breakfast,
      lunch: meal.lunch,
      dinner: meal.dinner,
    }));

    res.status(200).json(result); // Return the array of objects
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch meal data', details: error.message });
  }
};





exports.updateMeal = async (req, res) => {
  const { date, month, year, memberName } = req.params;
  const { breakfast, lunch, dinner } = req.body;

  try {
    const updatedMeal = await Meal.findOneAndUpdate(
      { date: parseInt(date), month: parseInt(month), year: parseInt(year), memberName },
      { breakfast, lunch, dinner },
      { new: true, upsert: true } // Creates a new document if one doesn't exist
    );

    res.status(200).json(updatedMeal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


