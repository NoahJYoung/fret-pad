import React from "react";
import NoteDiv from "./NoteDiv";
import { useSelector, useDispatch } from "react-redux";
import { toggleNote } from "../../../features/appSlice";
import { playNote } from "../../../assets/sounds";
import "../../../css/String.css";

const String = ({ className, name, fret, pageIndex }) => {
  const stringKey = className;
  const fretKey = fret;
  const sound = useSelector((state) => state.value.settings.sound);
  const state = useSelector(
    (state) => state.value.diagrams[pageIndex].frets[fret][stringKey]
  );
  const dispatch = useDispatch();
  const toggleNoteDisplay = () => {
    let newState;

    if (state === "sharps" && name.includes("♯")) {
      newState = "flats";
    } else if (state === "flats") {
      newState = "hide";
    } else if (state === "sharps") {
      newState = "hide";
    } else {
      newState = "sharps";
      if (sound) {
        playNote(fretKey, stringKey);
      }
    }

    return dispatch(
      toggleNote({
        pageIndex: pageIndex,
        fret: fretKey,
        string: stringKey,
        newState: newState,
      })
    );
  };
  return (
    <div className={className} onClick={toggleNoteDisplay} name={name}>
      <NoteDiv toggleNoteDisplay={state} name={name} />
      <div className={className + "Div"} />
    </div>
  );
};

export default String;
