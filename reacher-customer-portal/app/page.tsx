import React from "react";
import Sidebar from "./components/Sidebar";
import TimeframeDropdown from "./components/TimeframeDropdown";
import InfoBox from "./components/Infobox";
import MessagePerDayBox from "./components/MessageGraph";
import BotTable from "./components/BotTable";
import Download from "./components/Download";

const Dashboard: React.FC = () => {
  return (
    <main className="flex min-h-screen">
      {/* Left sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        {/* Analytics Dashboard text */}
        <div className="flex items-center justify-between mt-10 ml-10 mr-20">
          {/* Analytics Dashboard text */}
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          {/* Download button */}
          <Download />
        </div>
        {/* grey separator line */}
        <div className="ml-10 mr-20 flex justify-start items-center">
          <div className="border-b border-gray-400 flex-1 mt-10"></div>
        </div>
        {/* Timeframe Dropdown */}
        <div className="ml-10 mt-10 flex justify-start items-center">
          <TimeframeDropdown />
        </div>
        {/* Info box # messages sent */}
        <div className="ml-10 mt-10 flex justify-start">
          <InfoBox title="# Messages Sent" value="4,989" percentChange={5}/>
          {/* Graph displaying messages sent over day(s) */}
          <div style={{ marginLeft: "50px" }}>
            <MessagePerDayBox />
          </div>
        </div>
        {/* Info box # active bots */}
        <div className="ml-10 mt-10 flex justify-start">
          <InfoBox title="# Active Bots" value="17" percentChange={-15}/>
        </div>
        {/* Bot table */}
        <div className="ml-10 mt-10 flex">
          <BotTable />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
