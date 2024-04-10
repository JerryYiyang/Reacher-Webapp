import React from 'react';
import DaterangeDropdown from './DaterangeDropdown';
import LineGraph from './LineGraph';

const MessagePerDayBox: React.FC = () => {
  return (
    <div className="rounded-md border bg-white shadow-md p-4"
    style={{ width: '520px', height: '280px' }}>
      <div className="flex justify-between mb-4">
        <p className="text-md font-bold">Creators Messaged per Day</p>
        {/* DaterangeDropdown */}
        <DaterangeDropdown />
      </div>
      {/* Line graph component */}
      <div style={{ height: '300px', width: '480px' }}>
        <LineGraph />
      </div>
    </div>
  );
};

export default MessagePerDayBox;
