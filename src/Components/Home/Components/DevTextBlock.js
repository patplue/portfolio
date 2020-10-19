import React from "react";
import "./TextBlock.css";

const DevTextBlock = (props) => {
  return (
    <div>
      <div className="dev-block animate">
        <div className="home-text-block">
          <h1 className="dev-headline">
            Hi, I'm Patrick Plue.
            <br /> A Front-End Developer.
          </h1>
          <div className="dev-about-me">
            <p>
              Welcome to my portfolio,
              <br />
              <br />
              At the beginning of 2020 I attended the Le Wagon Bootcamp and
              within 3 Months I learned how to work with Ruby on Rails. During
              this period I fell in love with Front-End Development. Since then
              I dedicated myself to learn more about this field. In April 2020 I
              started working for a Start-Up being in charge of the entire
              Front-End Development. I picked up the pace quickly by adding
              React to my skill set. I use every chance I get to learn something
              new and practice my HTML, CSS and JavaScript skills.
            </p>
          </div>
        </div>
        <div className="arrow-container" onClick={props.next}>
          <div className="arrow-right slide-right">
            <div className="line-right-1"></div>
            <div className="line-right-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DevTextBlock;
