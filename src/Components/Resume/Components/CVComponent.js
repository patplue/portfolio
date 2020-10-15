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
      <h3 onClick={OpenAccordionSet} className="cv-headline">{props.location} <i class="Chevron"></i></h3>
      <div className={props.id + " " + props.closed}>
        <div className="cv-block">
              <p><span className="highlight">• </span><u>{props.position}</u></p>
              <p><span className="highlight">• </span>{props.description}</p>
              <p><span className="highlight">• </span>Time of Employment: {props.dates}</p>
        </div>
      </div>
    </div>
  );
};

export default CVComponent;
