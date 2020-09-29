import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import "./WelcomeCard.css";

const WelcomeCard = () => {
  return (
    <div id="Home">
      <Card>
        <CardContent>
          <div id="container">
            <div className="makework">I Make</div>
            <div id="flip">
              <div>
                <div>HTML</div>
              </div>
              <div>
                <div>React</div>
              </div>
              <div>
                <div>CSS</div>
              </div>
              <div>
                <div>Javascript</div>
              </div>
              <div>
                <div>Ruby on Rails</div>
              </div>
            </div>
            <div className="makework">Work</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeCard;
