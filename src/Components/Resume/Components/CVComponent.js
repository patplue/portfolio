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
      <p onClick={OpenAccordionSet} className="cv-headline">
        <strong>• {props.location}</strong> <i className="Chevron"></i>
      </p>
      <div className={props.id + " " + props.closed}>
        <div className="cv-block">
          <p>
            <span className="highlight">• </span>
            <strong>Position: </strong>{" "}
            <span className="highlight">{props.position}</span>
          </p>
          <p>
            <span className="cv-desc">
              <span className="highlight">• </span>
              <strong>Description:</strong>
              <span className="cv-desc-text">{props.description}</span>
            </span>
          </p>
          <p>
            <span className="highlight">• </span>
            <strong>Time of Employment: </strong>
            {props.dates}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVComponent;
