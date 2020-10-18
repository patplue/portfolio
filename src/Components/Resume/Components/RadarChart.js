import React from "react";
import { useState } from "react";
import { Radar } from "react-chartjs-2";
import Button from "@material-ui/core/Button";
import "./RadarChart.css";

const RadarChart = () => {
  const [locigOrCode, setLogicOrCode] = useState(false);
  const logicOrCodeSet = () => {
    if (locigOrCode === false) {
      setLogicOrCode(true);
    } else {
      setLogicOrCode(false);
    }
  };
  let logigOrCodeBtnText = "";
  let labels = [];
  let datasets = [];
  let ticks = {};
  if (locigOrCode === false) {
    logigOrCodeBtnText = "See my Personal Skills";
    labels = ["HTML", "CSS", "JavaScript", "React.js", "Rails"];
    datasets = [
      {
        label: "Level of Confidence",
        backgroundColor: ["rgba(251, 175, 0,0)"],
        borderColor: [
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
        ],
        borderWidth: 3,
        data: [6, 6, 6, 6, 5],
      },
    ];
  } else {
    logigOrCodeBtnText = "See my Coding Skills";
    labels = [
      ["Problem", "solving"],
      ["Critical", "Thinking"],
      ["Teamplayer"],
      ["Communication"],
      ["Self", "Awareness"],
    ];
    datasets = [
      {
        label: "Level of Confidence",
        backgroundColor: ["rgba(251, 175, 0,0)"],
        borderColor: [
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
        ],
        borderWidth: 3,
        data: [7, 7, 8, 9, 7],
      },
    ];
  }
  const data = {
    labels: labels,
    datasets: datasets,
  };
  const options = {
    tooltips: {
      enabled: false,
    },
    maintainAspectRatio: false,
    scale: {
      angleLines: {
        display: true,
        color: "rgba(111, 111, 111, 1)",
      },
      gridLines: {
        color: "rgba(111, 111, 111, 1)",
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10,
        stepSize: 2,
        showLabelBackdrop: true,
        backdropColor: "#302c2c",
        fontColor: "rgb(255,255,255)",
      },
      pointLabels: {
        fontSize: 14,
        fontColor: "#FFF",
      },
    },
  };
  return (
    <div className="radar-component-box">
      <div className="radar-container">
        <Radar data={data} width={350} height={350} options={options} />
      </div>
      <div className="button-container">
        <Button variant="outlined" color="primary" onClick={logicOrCodeSet}>
          <p className="button-text">{logigOrCodeBtnText}</p>
        </Button>
      </div>
    </div>
  );
};

export default RadarChart;
