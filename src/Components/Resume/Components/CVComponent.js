import React from "react";
import { useState } from "react";
import "./CVComponent.css";

const CVComponent = (props) => {
  let [openAccordion, setOpenAccordion] = useState(false);
  const OpenAccordionSet = () => {
    if (openAccordion === true) {
      setOpenAccordion(false);
    } else {
      setOpenAccordion(true);
    }
    if (openAccordion === false) {
      document.querySelector(`.${props.id}`).classList.remove("closed");
      document.querySelector(`.${props.id}`).classList.add("open-accordion");
    } else {
      document.querySelector(`.${props.id}`).classList.add("close-accordion");
      document.querySelector(`.${props.id}`).classList.remove("open-accordion");
      window.setTimeout(() => {
        document
          .querySelector(`.${props.id}`)
          .classList.remove("close-accordion");
        document.querySelector(`.${props.id}`).classList.add("closed");
      }, 400);
    }
  };
  return (
    <div>
      <h3 onClick={OpenAccordionSet}>{props.location}</h3>
      <div className={props.id + " " + props.closed}>
        <p>↳{props.position}</p>
        <p>{props.description}</p>
        <p>Time of Employment: {props.dates}</p>
      </div>
    </div>
  );
};

export default CVComponent;
