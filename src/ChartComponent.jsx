import React, {useEffect, useRef} from 'react'
import Chart from "chart.js/auto";
import './App.css'
import DownloadCsv from './DownloadCsv';
const ChartComponent = ({ wordCount }) => {
  console.log("wordCount", wordCount);
  const chartRef = useRef(null);
  useEffect(() => {
    const topWords = wordCount.slice(0, 20);
    if (!chartRef.current) {
      return;
    }
    const newChartInstance = new Chart(chartRef.current.getContext("2d"), {
      type: "bar",
      data: {
        labels: topWords.map((word) => word[0]),
        datasets: [
          {
            label: "Word Frequency",
            data: topWords.map((word) => word[1]),
            backgroundColor: "#1D267D",
            borderColor: "rgba(255, 99, 132, 1)",
          },
        ],
      },
    });
    return () => newChartInstance.destroy();
  }, []);
  return (
    <div className="chart-sub-container">
      <div className="chart-main">
        <canvas ref={chartRef} className="h-[80px]" />
      </div>
      <DownloadCsv wordCount={wordCount} />
    </div>
  );
};

export default ChartComponent;