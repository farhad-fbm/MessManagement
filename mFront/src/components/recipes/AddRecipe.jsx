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

  const handleAddRecipe = (type, recipe) => {
    if (type === 'breakfast') setBreakfast([...breakfast, recipe]);
    if (type === 'lunch') setLunch([...lunch, recipe]);
    if (type === 'dinner') setDinner([...dinner, recipe]);
  };

  const handleSubmit = async () => {
    const formattedDate = {
      date: selectedDate.getDate(),
      month: selectedDate.getMonth() + 1,
      year: selectedDate.getFullYear(),
    };

    const recipeData = { ...formattedDate, breakfast, lunch, dinner };

    try {
      const response = await axios.post(`${backURL}/recipes`, recipeData);
      console.log('Recipe added:', response.data);
    } catch (error) {
      console.error('Error adding recipe:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Daily Recipes</h2>
      <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      <div>
        <h3>Breakfast</h3>
        <input
          type="text"
          placeholder="Dish Name"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => handleAddRecipe('breakfast', { name: 'Dish', description })}>
          Add Breakfast
        </button>
        <ul>
          {breakfast.map((item, index) => (
            <li key={index}>{item.name} - {item.description}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Lunch</h3>
        <input
          type="text"
          placeholder="Dish Name"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => handleAddRecipe('lunch', { name: 'Dish', description })}>
          Add Lunch
        </button>
        <ul>
          {lunch.map((item, index) => (
            <li key={index}>{item.name} - {item.description}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Dinner</h3>
        <input
          type="text"
          placeholder="Dish Name"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => handleAddRecipe('dinner', { name: 'Dish', description })}>
          Add Dinner
        </button>
        <ul>
          {dinner.map((item, index) => (
            <li key={index}>{item.name} - {item.description}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleSubmit}>Submit Recipes</button>
    </div>
  );
};

export default AddRecipe;
