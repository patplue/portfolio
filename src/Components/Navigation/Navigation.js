import React from "react";
import { useState, useEffect } from "react";
import _ from "lodash";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AccountBoxIcon from "@material-ui/icons/AccountBoxOutlined";
import DeveloperBoardOutlinedIcon from "@material-ui/icons/DeveloperBoardOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

import "./Navigation.css";

const SimpleBottomNavigation = (props) => {
  const [value, setValue] = useState(0);
  let resumeOffset;
  let projectOffset;
  let contactOffset;
  const setOffset = () => {
    resumeOffset = document.querySelector("#Resume").offsetTop - 50;
    projectOffset = document.querySelector("#Projects").offsetTop - 50;
    contactOffset = document.querySelector("#Contact").offsetTop - 50;
  };
  const scrollingState = () => {
    let pageOffset = window.pageYOffset;
    if (pageOffset < resumeOffset) {
      setValue(0);
    } else if (pageOffset > resumeOffset && pageOffset < projectOffset) {
      setValue(1);
    } else if (pageOffset > projectOffset && pageOffset < contactOffset) {
      setValue(2);
    } else if (pageOffset > contactOffset) {
      setValue(3);
    }
  };

  useEffect(() => {
    setOffset();
    window.addEventListener("scroll", _.throttle(scrollingState, 500));
  });
  return (
    <BottomNavigation
      className="navigation"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        id="home"
        label="Home"
        href="#Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        id="resume"
        label="Resume"
        href="#Resume"
        icon={<AccountBoxIcon />}
      />
      <BottomNavigationAction
        id="projects"
        label="Projects"
        href="#Projects"
        icon={<DeveloperBoardOutlinedIcon />}
      />
      <BottomNavigationAction
        id="contact"
        label="Contact"
        href="#Contact"
        icon={<ContactMailOutlinedIcon />}
      />
    </BottomNavigation>
  );
};

export default SimpleBottomNavigation;
