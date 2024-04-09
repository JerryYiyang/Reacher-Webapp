import React from "react";
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
  return (
    <main className="flex min-h-screen">
      {/* Left sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 bg-gray-100">
        <h1 className="text-2xl font-bold mt-4 ml-4">Analytics Dashboard</h1> {/* Adjust size */}
        <div className="flex justify-center">
          {/* Content for the main section */}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
