import { useContext, useState } from 'react';
import axios from 'axios';
import { backURL } from '../../lib/constants';
import { DateContext } from './../../ContextProviders/DateContextProvider';

const GetRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');

  const {homeDate, homeMonth,homeYear} = useContext(DateContext);
  console.log(homeDate,homeMonth,homeYear);
  

  const handleFetchRecipe = async () => {
    try {
      const response = await axios.get(`${backURL}/recipes/${homeDate}/${homeMonth}/${homeYear}`);
      setRecipe(response.data);
      console.log(response.data);
      
      setError(''); 
    } catch (err) {
      setError('No recipe found for the selected date.');
      setRecipe(null); // Clear the recipe in case of an error
    }
  };

  return (
    <div>
      <h2>Get Recipe by Date</h2>
      <button onClick={handleFetchRecipe}>Fetch Recipe</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {recipe && (
        <div>
          <h3>Recipes for {`${homeDate}/${homeMonth}/${homeYear}`}</h3>
          <h4>Breakfast</h4>
          <ul>
            {recipe.breakfast.map((item, index) => (
              <li key={index}>
                {item.name} - {item.description}
              </li>
            ))}
          </ul>
          <h4>Lunch</h4>
          <ul>
            {recipe.lunch.map((item, index) => (
              <li key={index}>
                {item.name} - {item.description}
              </li>
            ))}
          </ul>
          <h4>Dinner</h4>
          <ul>
            {recipe.dinner.map((item, index) => (
              <li key={index}>
                {item.name} - {item.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GetRecipe;
