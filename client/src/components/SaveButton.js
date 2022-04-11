import React from "react";
import { useDispatch } from "react-redux";
import { saveImage } from "../assets/images";
import { save } from "../features/appSlice";

const SaveButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="toolbarBtn saveBtn"
      onClick={() => dispatch(save())}
    >
      <img className="saveImage" alt="save page" src={saveImage} />
    </button>
  );
};

export default SaveButton;
