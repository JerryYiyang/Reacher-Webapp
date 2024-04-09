"use client"
import React, { useState } from "react";

const BotTable: React.FC = () => {
  const [bots, setBots] = useState([
    { name: "Bot 1", status: "Stopped" },
    { name: "Bot 2", status: "Stopped" },
    { name: "Bot 3", status: "Stopped" }
  ]);

  const toggleStatus = (index: number) => {
    const updatedBots = [...bots];
    updatedBots[index].status = updatedBots[index].status === "Stopped" ? "Running" : "Stopped";
    setBots(updatedBots);
  };

  return (
    <div className="rounded-md border bg-gray-100 p-4 mr-10" style={{ width: "900px" }}>
      <h2 className="text-lg font-bold mb-4">Activate Bots</h2>
      <div className="flex justify-between">
        <p className="font-bold text-gray-500">Bot</p>
        <p className="font-bold text-gray-500">Status</p>
      </div>
      <hr className="my-4 border-gray-300" />
      {/* Bot entries */}
      {bots.map((bot, index) => (
        <div key={index} className="flex justify-between items-center" style={{ borderBottom: "1px solid #cbd5e0", paddingBottom: "8px", marginBottom: "8px" }}>
          <p className="font-bold">{bot.name}</p>
          <div className="flex items-center">
            <p className="text-gray-500">Click to</p>
            <button
              className={`ml-2 px-5 py-1 rounded font-bold text-white ${bot.status === "Stopped" ? "bg-green-500" : "bg-red-500"}`}
              onClick={() => toggleStatus(index)}
            >
              {bot.status === "Stopped" ? "Start" : "Stop"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotTable;
