import { React, useState } from "react";
import Fret from "./Fret";
import DiagramName from "./DiagramName";
import DiagramButtons from "./DiagramButtons";
import "../css/Fretboard.css";

const Fretboard = ({ pageIndex }) => {
  const [diagramOpacity, setdiagramOpacity] = useState("1");

  return (
    <div className="sectionContainer" style={{ opacity: diagramOpacity }}>
      <DiagramName className={"titleDiv"} pageIndex={pageIndex} />
      <div className="fretboardCont">
        <div className="Fretboard">
          {[...Array(17).keys()].map((i) => (
            <Fret pageIndex={pageIndex} key={i} className={`Fret${i + 1}`} />
          ))}
        </div>
      </div>
      <DiagramButtons
        setDiagramOpacity={setdiagramOpacity}
        pageIndex={pageIndex}
      />
    </div>
  );
};

export default Fretboard;
