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
        `${backURL}/recipes/${formattedDate.date}-${formattedDate.month}-${formattedDate.year}/${formattedDate.date}-${formattedDate.month}-${formattedDate.year}`
      );

      if (checkResponse.data.length > 0) {
        alert('Recipe for this date already exists!');
        return;
      }

      const recipeData = { ...formattedDate, breakfast, lunch, dinner };
      const response = await axios.post(`${backURL}/recipes`, recipeData);
      console.log('Recipe added:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
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
          placeholder="Breakfast Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => handleAddRecipe('breakfast')}>Add Breakfast</button>
        <ul>
          {breakfast.map((item, index) => (
            <li key={index}>
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Lunch</h3>
        <input
          type="text"
          placeholder="Lunch Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => handleAddRecipe('lunch')}>Add Lunch</button>
        <ul>
          {lunch.map((item, index) => (
            <li key={index}>
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Dinner</h3>
        <input
          type="text"
          placeholder="Dinner Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => handleAddRecipe('dinner')}>Add Dinner</button>
        <ul>
          {dinner.map((item, index) => (
            <li key={index}>
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleSubmit}>Submit Recipes</button>
    </div>
  );
};

export default AddRecipe;
