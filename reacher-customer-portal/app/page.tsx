import React from "react";
import Sidebar from "./components/Sidebar";
import Dropdown from "./components/Dropdown";

const Dashboard: React.FC = () => {
  return (
    <main className="flex min-h-screen">
      {/* Left sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        {/* Analytics dashboard */}
        <h1 className="text-2xl font-bold mt-10 ml-10">Analytics Dashboard</h1>
        {/* grey seperator line */}
        <div className="ml-10 flex justify-start items-center">
          <div className="border-b border-gray-400 flex-1 mt-10"></div>
        </div>
        {/* Dropdown */}
        <div className="ml-10 mt-10 flex justify-start items-center">
          <Dropdown />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
