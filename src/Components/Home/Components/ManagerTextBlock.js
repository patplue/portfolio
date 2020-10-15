import React from 'react';
import "./TextBlock.css"

const ManagerTextBlock = (props) => {
  return(
    <div>
      <div className="manager-block animate">
        <div className="arrow-container" onClick={props.back}>
          <div className="arrow-left" >
            <div className="line-left-1"></div>
            <div className="line-left-2"></div>
          </div>
        </div>
        <div className="home-text-block">
          <h1 className="manager-headline">Hi, I'm Patrick Plue.<br/> A Manager, A Teacher, A Student.</h1>
          <div className="manager-about-me">
            <p>
            Welcome to my portfolio,<br/>
            <br/>
            At the beginning of 2020 I atteded the <span className="highlight"> Le Wagon </span> 
            Bootcamp and within 3 Months I learned how to work with 
            <span className="highlight"> Ruby on Rails</span>. 
            During this period I fell in love with 
            <span className="highlight"> Front-End Development</span>, since then
            I did everything to learn more about this field. I started working for a Start-Up being
            being in charge of the entire <span className="highlight"> Front-End Development </span>
            I picked up the pace quick by adding <span className="highlight"> React</span> to my arsenal.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ManagerTextBlock