
import { useState } from 'react';
import { HomeClock } from '../homeClock/HomeClock';
import { Modal } from '../modal/Modal';

const getDaysInMonth = (year, month) => {
  return new Array(new Date(year, month, 0).getDate())
    .fill(null).map((_, i) => i + 1);
};
const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month - 1, 1).getDay();
};

const TD = new Date();
const today = `${TD.getFullYear()}-${TD.getMonth() + 1}-${TD.getDate()}`

export const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(TD.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(TD.getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(today);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


  const updateMonth = (direction) => {
    setCurrentMonth(prevMonth => {
      const newMonth = (prevMonth + direction + 11) % 12 + 1;
      if (newMonth === 12 && direction === -1) setCurrentYear(prevYear => prevYear - 1);
      if (newMonth === 1 && direction === 1) setCurrentYear(prevYear => prevYear + 1);
      return newMonth
    })
  }
  const handleGoToToday = () => {
    setCurrentYear(TD.getFullYear());
    setCurrentMonth(TD.getMonth() + 1);
    setSelectedDate(today);
  };
  // ______________________________________________________________
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleDayClick = (dateStr) => {
    const now = new Date();
    // const currentHour = now.getHours();
    const currentHour = 18;

    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    const tomorrowStr = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;

    // If it's after 6 PM and the user tries to select tomorrow's date, do nothing
    setSelectedDate(dateStr);
    if (currentHour >= 18 && dateStr === tomorrowStr) {
      return alert('times up'); // Prevent modal from opening
    }
    console.log(dateStr);
    openModal();
  }
  return (
    <div className="">

      <div className=""><HomeClock /></div>
      <div className="p-4 max-w-md mx-auto h-96">
        <div className="flex justify-between">
          <button className='p-6' onClick={() => updateMonth(-1)}>{'<'}</button>
          <p className="text-2xl font-bold mb-4">{monthNames[currentMonth - 1]} {currentYear}</p>
          <button className='p-6' onClick={() => updateMonth(1)}>{'>'}</button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {dayNames.map((day, idx) => (
            <div key={idx} className='text-center font-bold'>{day}</div>)
          )}
          {Array(firstDay).fill(null).map((_, i) => (
            <div key={`empty-${i}`} className="text-center"></div>)
          )}

          {
            daysInMonth.map(day => {
              const dateStr = `${currentYear}-${currentMonth}-${day}`;
              let bgColor = 'bg-white text-black';
              if (dateStr === today) bgColor = 'bg-orange-500 text-black';
              else if (dateStr === selectedDate) bgColor = 'bg-blue-500 text-white';
              return (
                <div
                  key={day}
                  onClick={() => handleDayClick(dateStr)}
                  className={`text-center py-2 cursor-pointer border rounded-lg ${bgColor}`}
                >
                  {day}
                </div>
              )
            })
          }
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={handleGoToToday}
          >
            Go to Today
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
