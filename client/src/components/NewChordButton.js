import React from "react";
import { useDispatch } from "react-redux";
import { newChordImage } from "../assets/images";
import { fretsChordBox } from "../util/frets";
import { addDiagram } from "../features/appSlice";

const NewChordButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="toolbarBtn newChordBtn"
      onClick={() => {
        dispatch(
          addDiagram({
            type: "chord",
            name: "",
            frets: fretsChordBox,
            openClose: ["O", "O", "O", "O", "O", "O"],
            fretMarker: "0",
          })
        );
      }}
    >
      <img src={newChordImage} alt={"Add Chord"} />
    </button>
  );
};

export default NewChordButton;
