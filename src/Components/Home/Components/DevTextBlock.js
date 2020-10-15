import React from 'react';
import "./TextBlock.css"

const DevTextBlock = (props) => {
  return(
    <div>
      <div className="dev-block animate">
      <div className="home-text-block">
        <h1 className="dev-headline">Hi, I'm Patrick Plue.<br/> A Front-End Developer.</h1>
        <div className="dev-about-me">
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
      <div className="arrow-container" onClick={props.next}>
        <div className="arrow-right">
          <div className="line-right-1"></div>
          <div className="line-right-2"></div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default DevTextBlock