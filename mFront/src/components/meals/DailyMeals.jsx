import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MealContext } from '../../ContextProviders/MealContextProvider';
import { backURL } from '../../lib/constants';

const DailyMeals = () => {
  const today = new Date();
  const [date, setDate] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1); // Months are 0-indexed
  const [year, setYear] = useState(today.getFullYear());
  // const [dailyMeals, setDailyMeals] = useState([]);

  const { todayMeals, setTodayMeals } = useContext(MealContext);

  // const fetchDailyMeals = async () => {
  //   try {
  //     console.log(`Fetching data for ${date}/${month}/${year}`);
  //     const res = await axios.get(`${backURL}/api/dailymeals/dailyAllMembersMeal/${date}/${month}/${year}`);
  //     console.log('Response data:', res.data);
  //     setTodayMeals(Array.isArray(res.data) ? res.data : []);
  //   } catch (error) {
  //     console.error('Error fetching daily meals data:', error);
  //   }
  // };
  const fetchDailyMeals = async () => {
    try {
      console.log(`Fetching data for ${date}/${month}/${year}`);
      const response = await fetch(`${backURL}/api/dailymeals/dailyAllMembersMeal/${date}/${month}/${year}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      setTodayMeals(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching daily meals data:', error);
    }
  };


  useEffect(() => {
    fetchDailyMeals();
  }, [date, month, year]);

  const previousDay = () => {
    const currentDate = new Date(year, month - 1, date);
    currentDate.setDate(currentDate.getDate() - 1);
    setDate(currentDate.getDate());
    setMonth(currentDate.getMonth() + 1);
    setYear(currentDate.getFullYear());
  };

  const nextDay = () => {
    const currentDate = new Date(year, month - 1, date);
    currentDate.setDate(currentDate.getDate() + 1);
    setDate(currentDate.getDate());
    setMonth(currentDate.getMonth() + 1);
    setYear(currentDate.getFullYear());
  };

  return (

    <div className='flex w-96 mx-auto justify-evenly text-xl font-semibold'>
      <button onClick={previousDay}>Prev</button>
      <button onClick={nextDay}>Next</button>
    </div>

  );
};

export default DailyMeals;
