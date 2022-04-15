import "../../../css/OpenClose.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOpenClose } from "../../../features/appSlice";

const OpenClose = ({ pageIndex, stringIndex }) => {
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state.value.diagrams[pageIndex].openClose[stringIndex]
  );
  const setOpenClose = () => {
    if (state === "X") {
      dispatch(
        toggleOpenClose({
          pageIndex: pageIndex,
          stringIndex: stringIndex,
          newState: "",
        })
      );
    } else if (state === "O") {
      dispatch(
        toggleOpenClose({
          pageIndex: pageIndex,
          stringIndex: stringIndex,
          newState: "X",
        })
      );
    } else {
      dispatch(
        toggleOpenClose({
          pageIndex: pageIndex,
          stringIndex: stringIndex,
          newState: "O",
        })
      );
    }
  };
  return (
    <div className="openCloseBtn" onClick={setOpenClose}>
      {state}
    </div>
  );
};

export default OpenClose;
