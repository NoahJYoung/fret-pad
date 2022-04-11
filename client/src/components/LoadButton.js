import React from "react";
import { useDispatch } from "react-redux";
import { loadImage } from "../assets/images";
import { load } from "../features/appSlice";

const LoadButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="loadBtn toolbarBtn"
      onClick={() => dispatch(load())}
    >
      <img className="saveImage" alt="save page" src={loadImage} />
    </button>
  );
};

export default LoadButton;