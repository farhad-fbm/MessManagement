/* eslint-disable react/prop-types */

import { Dinner, Lunch, Morning } from "./onMeals";
import { useState, useEffect, useRef } from "react";

const MealDropdown = ({ id, mealData, isOpen, onClick }) => {
  //____________________________
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClick(null);
      }
      console.log('clickOutside');

    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClick]);
  // ______________________________________________________________

  return (
    <div ref={dropdownRef} className="relative inline-block mr-4 font-extrabold">
      <button
        className={`py-1 px-2 rounded inline-flex items-center ${isOpen ? 'bg-[#AAB396] text-white' : 'bg-[#FFF8E8] text-gray-700'}`}
        onClick={() => onClick(id)}
      >
        {id} : {mealData.length} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center ml-6 -mt-2 bg-black bg-opacity-50"
        >
          <div className="bg-[#EEEDEB] text-[#2F3645]  rounded-xl shadow-lg w-48">
            <div className="text-2xl font-extrabold text-black px-2 pb-2">
              {id === 'M' ? "Morning" : id === "L" ? "Lunch" : "Dinner"}-{mealData.length}
            </div>
            {mealData.map(({ id, name, meal }) => (
              <div key={id} className="px-4 py-1  flex justify-between gap-2 border rounded-xl border-gray-300">
                <p>{name} :</p>
                <p>{meal}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DropDownContainer = () => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const handleDropdownClick = (dropdownId) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownId ? null : dropdownId
    );
  };

  return (

    <>
      <MealDropdown
        id="M"
        mealData={Morning}
        isOpen={openDropdown === "M"}
        onClick={handleDropdownClick}
      />
      <MealDropdown
        id="L"
        mealData={Lunch}
        isOpen={openDropdown === "L"}
        onClick={handleDropdownClick}
      />
      <MealDropdown
        id="D"
        mealData={Dinner}
        isOpen={openDropdown === "D"}
        onClick={handleDropdownClick}
      />
    </>
  );
};

export default DropDownContainer;
