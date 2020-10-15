import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import "./ProgressStepper.css";

import DevTextBlock from "./DevTextBlock";
import TeamTextBlock from "./TeamTextBlock";
import ManagerTextBlock from "./ManagerTextBlock";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    marginTop: 20,
  },
  text: {
    color: "white",
  },
});

export default function ProgressStepper() {
  const classes = useStyles();
  const theme = useTheme();
  let content;
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (activeStep === 0) {
    content = <DevTextBlock next={handleNext} />;
  } else if (activeStep === 1) {
    content = <TeamTextBlock next={handleNext} back={handleBack} />;
  } else if (activeStep === 2) {
    content = <ManagerTextBlock back={handleBack} />;
  }

  return (
    <div>
      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
      {content}
    </div>
  );
}
