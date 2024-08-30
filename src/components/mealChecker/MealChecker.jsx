import { useState } from 'react';

const MealChecker = () => {
  const [meals, setMeals] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setMeals((prevMeals) => ({
      ...prevMeals,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Meals:", meals);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="breakfast"
          name="breakfast"
          checked={meals.breakfast}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="breakfast" className="text-lg">Breakfast</label>
      </div>

      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="lunch"
          name="lunch"
          checked={meals.lunch}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="lunch" className="text-lg">Lunch</label>
      </div>

      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          id="dinner"
          name="dinner"
          checked={meals.dinner}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="dinner" className="text-lg">Dinner</label>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default MealChecker;
