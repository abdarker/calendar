import { useState } from "react";
import Calendar from "./components/Calendar";
import CalendarStrip from "./components/CalendarStrip";
import JsCalendarStrip from "./components/JsCalendarStrip";
import "./index.css";
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="App">
      <Calendar />

      <div>
        <JsCalendarStrip
          selectedDate={selectedDate}
          onDateChange={handleSelectDate}
        />
      </div>

      <div>
        <CalendarStrip />
      </div>
    </div>
  );
}

export default App;
