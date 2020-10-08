import React from "react";
import pic from "../../Pictures/profile.jpg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-img-block">
        <div className="line"></div>
        <img src={pic} alt="just me" className="profile-img" />
      </div>
      <div className="home-text-block">
        <h1>Hi, I'm Patrick Plue</h1>
        <div className="about-me">
          <p>
            Welcome to my website. Since you made your way here you either know
            me or you want to get to know me.
            <span className="highlight"> After 10 years in Retail</span> I
            decided to move on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
