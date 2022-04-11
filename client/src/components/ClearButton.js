import React from "react";
import { useDispatch } from "react-redux";
import { trashImage } from "../assets/images";
import { clearDiagrams } from "../features/appSlice";

const ClearButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="clearBtn toolbarBtn"
      onClick={() => dispatch(clearDiagrams())}
    >
      <img className="saveImage" alt="save page" src={trashImage} />
    </button>
  );
};

export default ClearButton;