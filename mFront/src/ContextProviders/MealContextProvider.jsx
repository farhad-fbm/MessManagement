/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";




export const MealContext = createContext();
export const MealProvider = ({ children }) => {

  const [todayMeals, setTodayMeals] = useState([]);

  

  const mealInfo = { todayMeals, setTodayMeals }
  return (
    <MealContext.Provider value={mealInfo}>
      {children}
    </MealContext.Provider>
  )
}