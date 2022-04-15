import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDocs } from "../../features/appSlice";
import { saveImage } from "../../assets/images";
import axios from "axios";

const SaveButton = () => {
  const state = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const handleSave = () => {
    if (state.documentId) {
      axios
        .patch("http://localhost:9000/save-doc", {
          user: state.user,
          documentId: state.documentId,
          title: state.title,
          diagrams: state.diagrams,
        })
        .then((res) => {
          console.log(res);
          dispatch(updateDocs(res.data.documents));
          alert("Document saved successfully!");
        });
    } else {
      axios
        .post("http://localhost:9000/save-doc", {
          user: state.user,
          title: state.title,
          diagrams: state.diagrams,
        })
        .then((res) => {
          console.log(res);
          dispatch(updateDocs(res.data.documents));
          alert("Document saved successfully!");
        });
    }
  };

  return (
    <button className="toolbarBtn saveBtn" onClick={() => handleSave()}>
      <img className="saveImage" alt="save page" src={saveImage} />
    </button>
  );
};

export default SaveButton;
