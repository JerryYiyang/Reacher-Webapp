"use client"
import React, { useState } from 'react';

const DaterangeDropdown: React.FC = () => {
  // Define selectedOption state
  const [selectedOption, setSelectedOption] = useState("");

  // Define handleSelectChange function
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select className="rounded-lg border bg-white p-2" value={selectedOption} onChange={handleSelectChange}>
        <option value="today">Daterange: Today</option>
        <option value="last7days">Daterange: Last 7 Days</option>
        <option value="lastmonth">Daterange: Last Month</option>
      </select>
    </div>
  );
};

export default DaterangeDropdown;
