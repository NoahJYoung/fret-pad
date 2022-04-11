import React from "react";
import { useDispatch } from "react-redux";
import { newFretboardButton } from "../assets/images";
import { fretsFretboard } from "../util/frets";
import { addDiagram } from "../features/appSlice";

const NewFretboardButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="toolbarBtn newFretboardBtn"
      onClick={() => {
        dispatch(
          addDiagram({ type: "fretboard", name: "", frets: fretsFretboard })
        );
      }}
    >
      <img src={newFretboardButton} alt={"Add fretboard"} />
    </button>
  );
};

export default NewFretboardButton;
