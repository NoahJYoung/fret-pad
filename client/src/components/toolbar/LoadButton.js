import React from "react";
import { loadImage } from "../../assets/images";

const LoadButton = (props) => {
  return (
    <button onClick={props.onClick} className="loadBtn toolbarBtn">
      <img className="saveImage" alt="save page" src={loadImage} />
    </button>
  );
};

export default LoadButton;
