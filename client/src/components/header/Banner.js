import React from "react";
import Login from "./Login";
import { fretPadLogo } from "../../assets/images";
import "../../css/Banner.css";

const Banner = () => {
  return (
    <div className="topBanner noPrint">
      <div className="logoDiv">
        <img className="logo" src={fretPadLogo} alt={"Fret Pad Logo"} />
      </div>
      <Login />
    </div>
  );
};

export default Banner;
