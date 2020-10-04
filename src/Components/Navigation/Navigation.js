import React from "react";
import { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AccountBoxIcon from "@material-ui/icons/AccountBoxOutlined";
import DeveloperBoardOutlinedIcon from "@material-ui/icons/DeveloperBoardOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";

import "./Navigation.css";

const SimpleBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      className="navigation"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" href="#Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        label="Resume"
        href="#Resume"
        icon={<AccountBoxIcon />}
      />
      <BottomNavigationAction
        label="Projects"
        href="#Projects"
        icon={<DeveloperBoardOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Contact"
        href="#Contact"
        icon={<ContactMailOutlinedIcon />}
      />
    </BottomNavigation>
  );
};

export default SimpleBottomNavigation;
