import React from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div>
      <div>
        <div id="container" className="animate">
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
              <div>RubyonRails</div>
            </div>
          </div>
          <div className="makework">Work</div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
