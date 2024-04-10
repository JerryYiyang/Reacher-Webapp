import React from 'react';
import DaterangeDropdown from './DaterangeDropdown';
import LineGraph from './LineGraph';

// interface MessagePerDayBoxProps {
//   dateRange: string;
// }

const MessagePerDayBox: React.FC = () => {
  return (
    <div className="rounded-md border bg-white shadow-md p-4"
    style={{ width: '520px', height: '300px' }}>
      <div className="flex justify-between mb-4">
        <p className="text-md font-bold">Creators Messaged per Day</p>
        {/* <DaterangeDropdown /> */}
      </div>
      {/* <p className="text-sm font-semibold">Date Range: {dateRange}</p> */}
      {/* Line graph component */}
      <div style={{ height: '300px', width: '480px' }}>
        <LineGraph />
      </div>
    </div>
  );
};

export default MessagePerDayBox;
