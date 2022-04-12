import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveImage } from "../assets/images";
import axios from "axios";

const SaveButton = () => {
  const state = useSelector((state) => state.value);

  const handleSave = () => {
    axios
      .post("http://localhost:9000/save-doc", {
        document: state,
      })
      .then(alert("Document saved successfully!"));
  };

  return (
    <button className="toolbarBtn saveBtn" onClick={() => handleSave()}>
      <img className="saveImage" alt="save page" src={saveImage} />
    </button>
  );
};

export default SaveButton;
