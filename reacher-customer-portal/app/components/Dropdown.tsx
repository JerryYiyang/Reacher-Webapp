"use client"
import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  // Define selectedOption state
  const [selectedOption, setSelectedOption] = useState("");

  // Define handleSelectChange function
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select className="rounded-md border bg-white shadow-md p-2" value={selectedOption} onChange={handleSelectChange}>
        <option value="today">Today</option>
        <option value="last7days">Last 7 Days</option>
        <option value="lastmonth">Last Month</option>
      </select>
    </div>
  );
};

export default Dropdown;
