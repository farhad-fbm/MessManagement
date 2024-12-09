import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../ContextProviders/AuthContextProvider";
import { backURL } from "../../lib/constants";

// const MonthlyMealInfo = () => {
export const Dasboard = () => {

  const { user } = useContext(AuthContext);
  const [mealData, setMealData] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const fetchMealData = async () => {
    try {
      const response = await axios.get(
        `${backURL}/dailymeals/monthlyMemberMeals/${month}/${year}/${user?.name}`
      );
      console.log(response.data);
      setMealData(response.data);
    } catch (error) {
      console.error("Error fetching monthly meal info:", error.message);
    }
  };

  useEffect(() => {
    fetchMealData();
  }, [month, year]);

  const handlePrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        >
          &larr; Previous
        </button>
        <h2 className="text-xl font-bold">
          {new Date(year, month - 1).toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button
          onClick={handleNextMonth}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
        >
          Next &rarr;
        </button>
      </div>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Date</th>
            <th className="border px-4 py-2 text-left">Breakfast</th>
            <th className="border px-4 py-2 text-left">Lunch</th>
            <th className="border px-4 py-2 text-left">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {mealData.length > 0 ? (
            mealData.map((meal, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{meal.date}</td>
                <td className="border px-4 py-2">{meal.breakfast}</td>
                <td className="border px-4 py-2">{meal.lunch}</td>
                <td className="border px-4 py-2">{meal.dinner}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No data available for this month.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// export default MonthlyMealInfo;
