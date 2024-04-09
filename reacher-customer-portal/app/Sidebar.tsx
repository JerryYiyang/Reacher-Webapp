import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-64 bg-white flex flex-col relative">
      {/* Navigation buttons */}
      <nav className="flex flex-col items-center space-y-4">
        <a href="/dashboard" className="btn">Dashboard</a>
        {/* Add more navigation buttons as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;
