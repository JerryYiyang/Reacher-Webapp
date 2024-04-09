import React from 'react';
import DaterangeDropdown from './DaterangeDropdown';

// interface MessagePerDayBoxProps {
//   dateRange: string;
// }

const MessagePerDayBox: React.FC = () => {
  return (
    <div className="rounded-md border bg-white shadow-md p-4">
      <div className="flex justify-between mb-4">
        <p className="text-lg font-bold">Creators Messaged per Day</p>
        {/* <DaterangeDropdown /> */}
      </div>
      {/* <p className="text-sm font-semibold">Date Range: {dateRange}</p> */}
      {/* Line graph component */}
      <div className="w-full h-40 bg-gray-200 rounded-md"></div>
    </div>
  );
};

export default MessagePerDayBox;
