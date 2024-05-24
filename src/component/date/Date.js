import React, { useEffect, useState } from "react";
import "./Date.scss";
const DateP = (props) => {
  // Initialize state with the current date
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format date as "DD/MM/YYYY"
  const formattedDate = `${selectedDate.getDate()}-${
    selectedDate.getMonth() + 1
  }-${selectedDate.getFullYear()}`;

  useEffect(() => {
    props.setDate(selectedDate);
  }, [selectedDate]);

  // Handle date change
  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  return (
    <div className="allDate">
      <label htmlFor="datePicker"> اختر التاريخ </label>
      <div>
        {" "}
        <input
          type="date"
          id="datePicker"
          // value={selectedDate.toISOString().split("T")[0]}
          onChange={handleDateChange}
        />
      </div>

      <p> الطلبيات من تاريخ : {formattedDate}</p>
    </div>
  );
};

export default DateP;
