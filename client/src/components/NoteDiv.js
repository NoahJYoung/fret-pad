import React from "react";
import "../css/NoteDiv.css";
import sharpsToFlats from "../util/sharpsToFlats";

const NoteDiv = ({ name, toggleNoteDisplay }) => {
  if (toggleNoteDisplay === "sharps") {
    return <div className="NoteDiv">{name}</div>;
  } else if (toggleNoteDisplay === "flats") {
    return <div className="NoteDiv">{sharpsToFlats[name]}</div>;
  } else {
    return null;
  }
};

export default NoteDiv;
