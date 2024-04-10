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
      <select className="rounded-extra border bg-white p-1"
      value={selectedOption} onChange={handleSelectChange} style={{ fontSize: '0.875rem' }}>
        <option value="today">Date Range: Today</option>
        <option value="last7days">Date Range: Last 7 Days</option>
        <option value="lastmonth">Date Range: Last Month</option>
      </select>
    </div>
  );
};

export default DaterangeDropdown;
