import Fretboard from "./Fretboard";
import ChordBox from "./ChordBox";
import { useSelector } from "react-redux";

const DiagramGrid = () => {
  const state = useSelector((state) => state.value.diagrams);

  if (state.length > 0) {
    return (
      <div className="diagramContainer">
        {state.map((diagram, i) =>
          diagram.type === "fretboard" ? (
            <Fretboard key={i} pageIndex={i} />
          ) : (
            <ChordBox key={i} pageIndex={i} />
          )
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default DiagramGrid;
