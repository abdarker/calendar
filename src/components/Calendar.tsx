import { addDays, format, isToday } from "date-fns";
import React, { useRef, useState } from "react";
import "./Calendar.css"; // Import the custom CSS for hiding the scrollbar

const Calendar: React.FC = () => {
  const daysToShow = 365; // Number of days to show in the scrollable strip
  const [startDate, setStartDate] = useState(new Date()); // Start from some days before today
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // State to store the selected date

  // Generate an array of dates
  const dates = Array.from({ length: daysToShow }, (_, index) =>
    addDays(startDate, index)
  );

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date); // Set the clicked date as selected
    console.log(format(date, "yyyy-MM-dd"));
  };

  const scrollByDays = (days: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: days * 10, // 100px is the width of one date box
        behavior: "smooth",
      });
      setStartDate(addDays(startDate, days));
    }
  };

  return (
    <div className="p-1 bg-gray-100 rounded-lg shadow-md">
      {/* Header displaying the current month and year */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">
          {format(startDate, "MMMM yyyy")}
        </h2>
      </div>

      <div className="flex items-center mb-4 gap-x-1">
        <button
          onClick={() => scrollByDays(-7)}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        >
          Prev
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar whitespace-nowrap space-x-4"
        >
          {dates.map((date) => (
            <div
              key={date.toString()}
              onClick={() => handleDateClick(date)}
              className={`flex flex-col items-center p-6 rounded-full cursor-pointer transition duration-200  ${
                isToday(date)
                  ? "bg-red-500 text-white"
                  : selectedDate &&
                    selectedDate.toDateString() === date.toDateString()
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              }`}
            >
              <span className="text-sm">{format(date, "EEE")}</span>
              <span className="text-lg font-bold">{format(date, "dd")}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollByDays(7)}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Calendar;
