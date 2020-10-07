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
        <h1>Hi, my name is Patrick Plue</h1>
        <div className="about-me">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            consequatur quas, laudantium ut veritatis aut nostrum tempora
            laborum fuga optio quidem rerum vitae facere sed eos est fugiat quo
            explicabo. Ipsam voluptatibus, non id quis est placeat
            necessitatibus illo similique praesentium! Ex consequuntur
            dignissimos, numquam aliquid, quia adipisci necessitatibus quos
            delectus, illum iure mollitia molestias eveniet. Quia doloribus iste
            sit? Quo quae nam eius laboriosam cupiditate sapiente accusamus
            magni, tempore vero sunt quam ex necessitatibus. Iste eius, culpa
            eaque libero, commodi sequi, vitae esse ipsum recusandae velit error
            sapiente saepe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
