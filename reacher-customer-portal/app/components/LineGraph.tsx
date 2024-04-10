"use client"
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js/auto";

export default function LineGraph() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    Chart.register(...registerables);

    const chartConfig = {
      type: "line" as const,
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Messaged Per Day",
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        // Add your options here
      },
    };

    const ctx = chartRef.current?.getContext("2d");
    if (ctx) {
      const myChart = new Chart(ctx, chartConfig);

      return () => {
        myChart.destroy();
      };
    }
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-blueGray-700">
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-350-px">
          <canvas id="line-chart" ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
}
