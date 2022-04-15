import React from "react";
import { useDispatch } from "react-redux";
import { newDocImage } from "../../assets/images";
import { newDocument } from "../../features/appSlice";

const NewDocButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="clearBtn toolbarBtn"
      onClick={() => dispatch(newDocument())}
    >
      <img className="saveImage" alt="save page" src={newDocImage} />
    </button>
  );
};

export default NewDocButton;
