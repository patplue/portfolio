import React from "react";
import { useState } from "react";
import { Radar } from "react-chartjs-2";
import Button from "@material-ui/core/Button";

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
        label: "Months of Experince",
        backgroundColor: ["rgba(251, 175, 0,0)"],
        borderColor: [
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
        ],
        borderWidth: 3,
        data: [10, 10, 7, 5, 9],
      },
    ];
    ticks = {
      suggestedMin: 0,
      suggestedMax: 12,
      stepSize: 1,
      showLabelBackdrop: false,
    };
  } else {
    logigOrCodeBtnText = "See my Coding Skills";
    labels = [
      "Problem solving",
      "Logic",
      "Teamplayer",
      "Dicksize",
      "Perosnality",
    ];
    datasets = [
      {
        label: "Level",
        backgroundColor: ["rgba(251, 175, 0,0)"],
        borderColor: [
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
          "rgba(251, 175, 0,1)",
        ],
        borderWidth: 3,
        data: [10, 10, 10, 10, 10],
      },
    ];
    ticks = {
      suggestedMin: 0,
      suggestedMax: 10,
      stepSize: 1,
      showLabelBackdrop: false,
    };
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
        display: false,
      },
      gridLines: {
        color: 
          "rgba(111, 111, 111, 1)"
        ,
      },
      ticks: ticks,
      pointLabels: {
        fontSize: 14,
        fontColor: "#FFF",
      },
    },
  };
  return (
    <div>
      <Button onClick={logicOrCodeSet}>
        <p className="button-text">{logigOrCodeBtnText}</p>
      </Button>
      <Radar data={data} width={400} height={200} options={options} />
    </div>
  );
};

export default RadarChart;
