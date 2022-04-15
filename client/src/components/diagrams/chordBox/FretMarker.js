import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFretMarker, updateFretMarker } from "../../../features/appSlice";
import "../../../css/FretMarker.css";

const FretMarker = ({ pageIndex }) => {
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state.value.diagrams[pageIndex].fretMarker
  );
  let fretMarker = "0";

  return state !== "" ? (
    <p
      onClick={() => dispatch(updateFretMarker({ pageIndex: pageIndex }))}
      className="fretMarker"
    >
      {state}
    </p>
  ) : (
    <input
      autoFocus
      onChange={(e) => (fretMarker = e.target.value)}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          e.target.blur();
        }
      }}
      onBlur={() =>
        dispatch(
          setFretMarker({
            pageIndex: pageIndex,
            newFretMarker: fretMarker,
          })
        )
      }
      type="text"
      className="fretMarkerInput"
    />
  );
};

export default FretMarker;
