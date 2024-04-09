import React from 'react';

interface InfoBoxProps {
  title: string;
  value: string;
  percentChange: number;
}

// title is type of info box, value is the whatever value you want, and percentChange
// is the percent changed
const InfoBox: React.FC<InfoBoxProps> = ({ title, value, percentChange }) => {
  // if percent change >= 0 then green otherwise red
  const textColor = percentChange >= 0 ? 'text-green-500' : 'text-red-500';
  const changeText = percentChange >= 0 ? `+${percentChange}% Day Change` : `${percentChange}% Day Change`;

  return (
    <div className="rounded-md border bg-white shadow-md p-4">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-2xl font-bold mb-2">{value}</p>
      <p className={`text-lg font-semibold ${textColor}`}>{changeText}</p>
    </div>
  );
};

export default InfoBox;
