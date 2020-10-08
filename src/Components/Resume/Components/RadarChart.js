import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {
  const data = {
    labels: ["HTML", "CSS", "JavaScript", "React.js", "Ruby on Rails"],
    datasets: [
      {
        label: "Months of Experince",
        data: [12, 12, 7, 5, 9],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    lineTension: 5000,
    scale: {
      angleLines: {
        display: true,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 12,
      },
    },
  };
  return (
    <div>
      <Radar data={data} width={400} height={400} options={options} />
    </div>
  );
};

export default RadarChart;
