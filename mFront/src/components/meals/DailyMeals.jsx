import { useEffect, useContext } from 'react';
import axios from 'axios';
import { MealContext } from '../../ContextProviders/MealContextProvider';
import { backURL } from '../../lib/constants';
import { DateContext } from '../../ContextProviders/DateContextProvider';

const DailyMeals = () => {

  const { setTodayMeals } = useContext(MealContext);

  const { homeDate, setHomeDate,
    homeMonth, setHomeMonth,
    homeYear, setHomeYear } = useContext(DateContext)

  const fetchDailyMeals = async () => {
    try {
      const res = await axios.get(`${backURL}/dailymeals/dailyAllMembersMeal/${homeDate}/${homeMonth}/${homeYear}`);
      setTodayMeals(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching daily meals data:', error);
    }
  };
 
  useEffect(() => {
    fetchDailyMeals();
  }, [homeDate, homeMonth, homeYear]);

  const previousDay = () => {
    const currentDate = new Date(homeYear, homeMonth - 1, homeDate);
    currentDate.setDate(currentDate.getDate() - 1);
    setHomeDate(currentDate.getDate());
    setHomeMonth(currentDate.getMonth() + 1);
    setHomeYear(currentDate.getFullYear());
  };

  const nextDay = () => {
    const currentDate = new Date(homeYear, homeMonth - 1, homeDate);
    currentDate.setDate(currentDate.getDate() + 1);
    setHomeDate(currentDate.getDate());
    setHomeMonth(currentDate.getMonth() + 1);
    setHomeYear(currentDate.getFullYear());
  };

  return (

    <div className='flex w-96 mx-auto justify-evenly text-xl font-semibold'>
      <button onClick={previousDay}>Prev</button>
      <button onClick={nextDay}>Next</button>
    </div>

  );
};

export default DailyMeals;
