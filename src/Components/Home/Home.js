import React from "react";
import pic from "../../Pictures/profile.jpg";
import ProgressStepper from './Components/ProgressStepper';

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-img-block">
        <div className="line"></div>
        <img src={pic} alt="just me" className="profile-img" />
      </div>
      <ProgressStepper />
      
    </div>
  );
};

export default Home;
