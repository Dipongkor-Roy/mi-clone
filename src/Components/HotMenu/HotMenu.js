import React from "react";
import { Link } from "react-router-dom";
import './HotMenu.css'

const HotMenu = () => {
  return (
    <div className="HotMenu">
      <Link className="HotLink" to="/music">
        Music Store
      </Link>
      <Link className="HotLink" to="/smartDevice">
        Smart Devices
      </Link>
      <Link className="HotLink" to="/home">
        Home
      </Link>
      <Link className="HotLink" to="/lifestyle">
        Life Style
      </Link>
      <Link className="HotLink" to="/mobileAccesories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotMenu;
