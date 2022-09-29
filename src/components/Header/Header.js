import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
        <div className="header-container">
       <span className="header-icon">
        <FontAwesomeIcon icon={faSliders}/>
       </span>

      <h1 className="header-text">MY ACTIVITY</h1>
        </div>
    </div>
  );
};

export default Header;
