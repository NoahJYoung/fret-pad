import React from "react";
import { printImage } from "../assets/images";


const PrintButton = () => {
  
  return (
    <button
      className="printBtn toolbarBtn"
      onClick={() => {
        window.print();
      }}
    >
      <img className="saveImage" alt="save page" src={printImage} />
    </button>
  );
};

export default PrintButton;
