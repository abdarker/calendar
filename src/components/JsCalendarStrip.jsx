import React from "react";

import calendarLogic from "./CalendarLogic";
import SingleDateBox from "./SingleDateBox";
import "./style.css";

const JsCalendarStrip = (props) => {
  const {
    selectedDate,
    onDateChange,
    style,
    headerStyle,
    dateNumberStyle,
    dayNameStyle,
    selectedDayNameStyle,
    selectedDateStyle,
    selectedDateNumberStyle,
    buttonStyle,
    hoverStyle,
    disableDates,
    disableStyle,
    startDate,
    endDate,
  } = props;

  const {
    handlePrevious,
    handleNext,
    visibleDates,
    firstMonthVisible,
    secondMonthVisible,
  } = calendarLogic(startDate, endDate);

  return (
    <div style={{ ...style }}>
      <p className="calendar_header_text" style={{ ...headerStyle }}>
        {firstMonthVisible}
        {secondMonthVisible ? ` / ${secondMonthVisible}` : ""}
      </p>
      <div className="calendar_strip_main_container">
        <div
          style={{ ...buttonStyle }}
          className="calendar_strip_previous_next_button"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="calendar_strip_container">
          {visibleDates.map((item) => {
            return (
              <SingleDateBox
                disableDates={disableDates}
                dateNumberStyle={dateNumberStyle}
                dayNameStyle={dayNameStyle}
                onDateChange={onDateChange}
                disableStyle={disableStyle}
                selectedDateNumberStyle={selectedDateNumberStyle}
                selectedDateStyle={selectedDateStyle}
                hoverStyle={hoverStyle}
                selectedDayNameStyle={selectedDayNameStyle}
                date={item}
                key={Math.random()}
                currentDate={selectedDate ? selectedDate : new Date()}
              />
            );
          })}
        </div>
        <div
          className="calendar_strip_previous_next_button"
          onClick={handleNext}
          style={{ ...buttonStyle }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default JsCalendarStrip;
