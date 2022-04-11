import { React, useState } from "react";
import ChordFret from "./ChordFret";
import OpenClose from "./OpenClose";
import DiagramName from "./DiagramName";
import FretMarker from "./FretMarker";
import DiagramButtons from "./DiagramButtons";
import "../css/ChordDiagram.css";

const ChordBox = ({ pageIndex }) => {
  const [diagramOpacity, setDiagramOpacity] = useState("1");
  const fretNumbers = [...Array(5).keys()];
  const stringNumbers = [...Array(6).keys()].reverse();
  return (
    <div className="chordCont" style={{ opacity: diagramOpacity }}>
      <DiagramName className={"chordName"} pageIndex={pageIndex} />
      <FretMarker pageIndex={pageIndex} />
      <div className="openCloseCont">
        {stringNumbers.map((i) => (
          <OpenClose pageIndex={pageIndex} stringIndex={i} key={i} />
        ))}
      </div>
      <div className="ChordDiagram">
        {fretNumbers.map((i) => (
          <ChordFret
            key={i}
            pageIndex={pageIndex}
            fret={"chordFret" + (i + 1)}
            className={`chordFret chordFret${i + 1}`}
          />
        ))}
      </div>
      <DiagramButtons
        setDiagramOpacity={setDiagramOpacity}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default ChordBox;
