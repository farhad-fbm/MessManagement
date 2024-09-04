
import { Dinner, Lunch, Morning } from "./onMeals";
import { useState, useEffect, useRef } from "react";

const MealDropdown = ({ id, mealData, isOpen, onClick }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClick(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClick]);

  return (
    <div ref={dropdownRef} className="relative inline-block mr-4">
      <button
        className="bg-gray-300 text-gray-700 py-1 px-2 rounded inline-flex items-center"
        onClick={() => onClick(id)}
      >
        {id}: {mealData.length} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white border rounded shadow-lg p-4 w-48">
            {mealData.map(({ id, name, meal }) => (
              <div key={id} className="px-4 py-2 text-gray-800">
                {name}: {meal}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const MealTracker = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (dropdownId) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownId ? null : dropdownId
    );
  };

  return (
    <div className="p-4">
      <pre className="bg-gray-200 p-4 rounded">
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
      </pre>
    </div>
  );
};

export default MealTracker;
