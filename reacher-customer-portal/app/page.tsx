import React from "react";
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
  return (
    <main className="flex min-h-screen">
      {/* Left sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        <h1 className="text-2xl font-bold mt-10 ml-10">Analytics Dashboard</h1>
        <div className="ml-10 flex justify-start items-center">
          <div className="border-b border-gray-400 flex-1 mt-10"></div>
        </div>
        <div className="flex justify-center">
          {/* Content for the main section */}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
