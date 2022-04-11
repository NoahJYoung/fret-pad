import React from "react";
import FingerDiv from "./FingerDiv";
import { useSelector, useDispatch } from "react-redux";
import { toggleNote, toggleOpenClose } from "../features/appSlice";
import "../css/ChordString.css";

const ChordString = ({ className, pageIndex, fret, string }) => {
  const stringKey = string;
  const fretKey = fret;
  const state = useSelector(
    (state) => state.value.diagrams[pageIndex].frets[fretKey][stringKey]
  );

  const dispatch = useDispatch();
  const toggleFingerDisplay = () => {
    let newNoteState = state + 1;
    let newOpenCloseState = "";
    if (newNoteState > 4) {
      newNoteState = 0;
      newOpenCloseState = "O";
    }
    dispatch(
      toggleNote({
        pageIndex: pageIndex,
        fret: fretKey,
        string: stringKey,
        newState: newNoteState,
      })
    );
    dispatch(
      toggleOpenClose({
        pageIndex: pageIndex,
        stringIndex: parseInt(string[string.length - 1]) - 1,
        newState: newOpenCloseState,
      })
    );
  };
  return (
    <div className="stringCont" onClick={toggleFingerDisplay}>
      <FingerDiv fingerDisplay={state} />
      <div className={className} />
    </div>
  );
};

export default ChordString;
