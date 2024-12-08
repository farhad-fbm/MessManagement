/* eslint-disable react/prop-types */

import { createContext, useState } from "react";




export const DateContext = createContext();
export const DateProvider = ({ children }) => {

  const today = new Date();
  const [homeDate, setHomeDate] = useState(today.getDate());
  const [homeMonth, setHomeMonth] = useState(today.getMonth() + 1); // Months are 0-indexed
  const [homeYear, setHomeYear] = useState(today.getFullYear());



  const dateInfo = { homeDate, setHomeDate, homeMonth, setHomeMonth, homeYear, setHomeYear };
  return (
    <DateContext.Provider value={dateInfo}>
      {children}
    </DateContext.Provider>
  )
}