import React from "react";
import ChordString from "./ChordString";
import "../css/ChordFret.css";

const ChordFret = ({ className, pageIndex, fret }) => {
  return (
    <div className={className}>
      {[...Array(6).keys()].map((i) => (
        <ChordString
          pageIndex={pageIndex}
          fret={fret}
          string={"chordString" + (i + 1)}
          key={i}
          className={`chordString chordString${i + 1}`}
        />
      ))}
    </div>
  );
};

export default ChordFret;
