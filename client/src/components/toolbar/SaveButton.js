import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDocs, setLoading } from "../../features/appSlice";
import { saveImage } from "../../assets/images";
import axios from "axios";

const SaveButton = () => {
  const state = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(setLoading(true));
    if (state.documentId) {
      axios
        .patch("/save-doc", {
          user: state.user,
          documentId: state.documentId,
          title: state.title,
          diagrams: state.diagrams,
        })
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(updateDocs(res.data.documents));
        });
    } else {
      axios
        .post("/save-doc", {
          user: state.user,
          title: state.title,
          diagrams: state.diagrams,
        })
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(updateDocs(res.data.documents));
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
