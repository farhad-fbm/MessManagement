
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { backURL } from '../../lib/constants';

const AddRecipe = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [description, setDescription] = useState('');

  const handleAddRecipe = (type) => {
    let name = '';
    if (type === 'breakfast') {
      name = `B${breakfast.length + 1}`;
      setBreakfast([...breakfast, { name, description }]);
    }
    if (type === 'lunch') {
      name = `L${lunch.length + 1}`;
      setLunch([...lunch, { name, description }]);
    }
    if (type === 'dinner') {
      name = `D${dinner.length + 1}`;
      setDinner([...dinner, { name, description }]);
    }
  };

  const handleSubmit = async () => {
    const formattedDate = {
      date: selectedDate.getDate(),
      month: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear(),
    };

    try {
      // Check if a recipe already exists for the date
      const checkResponse = await axios.get(
        `${backURL}/recipes/${formattedDate.date}/${formattedDate.month}/${formattedDate.year}`
      );

      if (checkResponse.data) {
        alert('Recipe for this date already exists!');
        return;
      }

      const recipeData = { ...formattedDate, breakfast, lunch, dinner };
      const response = await axios.post(`${backURL}/recipes`, recipeData);
      console.log('Recipe added:', response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // If no recipe exists, proceed with adding
        const recipeData = { ...formattedDate, breakfast, lunch, dinner };
        const response = await axios.post(`${backURL}/recipes`, recipeData);
        console.log('Recipe added:', response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Daily Recipes</h2>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="mt-2 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Breakfast</h3>
        <input
          type="text"
          placeholder="Breakfast Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleAddRecipe('breakfast')}
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Breakfast
        </button>
        <ul className="mt-2">
          {breakfast.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Lunch</h3>
        <input
          type="text"
          placeholder="Lunch Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleAddRecipe('lunch')}
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Lunch
        </button>
        <ul className="mt-2">
          {lunch.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Dinner</h3>
        <input
          type="text"
          placeholder="Dinner Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => handleAddRecipe('dinner')}
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add Dinner
        </button>
        <ul className="mt-2">
          {dinner.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
      >
        Submit Recipes
      </button>
    </div>
  );
};

export default AddRecipe;
