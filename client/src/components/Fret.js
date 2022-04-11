import React from "react";
import String from "./String";
import noteObj from "../util/notesObj";
import "../css/Fret.css";

const Fret = ({ className, pageIndex }) => {
  const notes = noteObj;

  return (
    <div className={className + " Fret"}>
      {[...Array(6).keys()].map((i) => (
        <String
          pageIndex={pageIndex}
          fret={className}
          key={i}
          className={`string${i + 1}`}
          name={notes[className][i + 1]}
        />
      ))}
    </div>
  );
};

export default Fret;
