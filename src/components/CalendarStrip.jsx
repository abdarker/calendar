import React, { useState } from 'react';
import dayjs from 'dayjs';
import "./Calendar.css"
const CalendarStrip = () => {
  // Initial state for the starting date of the strip
  const [startDate, setStartDate] = useState(dayjs());

  // Generate an array of dates based on the start date
  const dates = Array.from({ length: 7 }, (_, index) =>
    startDate.add(index, 'day')
  );

  // Handler to move the strip forward
  const handleNext = () => {
    setStartDate(prevDate => prevDate.add(7, 'day'));
  };

  // Handler to move the strip backward
  const handlePrev = () => {
    setStartDate(prevDate => prevDate.subtract(7, 'day'));
  };

  return (
    <div className="w-full">
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-l-lg hover:bg-gray-400"
        >
          Prev
        </button>
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="flex space-x-4 px-4">
            {dates.map((date, index) => (
              <div
                key={index}
                className="min-w-[60px] p-4 text-center bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300"
              >
                <p className="text-sm text-gray-600">
                  {date.format('ddd')} {/* Day of the week, e.g., 'Mon' */}
                </p>
                <p className="text-lg font-bold">
                  {date.format('D')} {/* Day of the month, e.g., '1' */}
                </p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-r-lg hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CalendarStrip;
