import React from "react";
import { useDispatch, useStore } from "react-redux";
import { removeDiagram, changePagePos } from "../features/appSlice";
import {
  trashImage,
  upArrowImage,
  downArrowImage,
  angleUpImage,
  angleDownImage,
} from "../assets/images";
import "../css/DiagramButtons.css";

const DiagramButtons = ({ pageIndex, setDiagramOpacity }) => {
  const dispatch = useDispatch();
  const pageLength = useStore().getState().value.diagrams.length;
  return (
    <div className="btnContainer">
      <button
        className="deleteBtn noPrint"
        data-title="Delete"
        onMouseEnter={() => setDiagramOpacity("0.5")}
        onMouseLeave={() => setDiagramOpacity("1")}
        onClick={() => {
          dispatch(removeDiagram({ deleteIndex: pageIndex }));
        }}
      >
        <img className="buttonIcon" alt="delete" src={trashImage} />
      </button>
      <button
        className="moveUpBtn noPrint"
        data-title="Move up"
        onClick={() => {
          if (pageIndex > 0) {
            dispatch(
              changePagePos({
                currentIndex: pageIndex,
                newIndex: pageIndex - 1,
              })
            );
          }
        }}
      >
        <img className="buttonIcon" alt="move down" src={upArrowImage} />
      </button>
      <button
        className="moveDownBtn noPrint"
        data-title="Move down"
        onClick={() => {
          if (pageIndex < pageLength - 1) {
            dispatch(
              changePagePos({
                currentIndex: pageIndex,
                newIndex: pageIndex + 1,
              })
            );
          }
        }}
      >
        <img className="buttonIcon" alt="move up" src={downArrowImage} />
      </button>
      <button
        className="toTopBtn noPrint"
        data-title="To top"
        onClick={() => {
          dispatch(
            changePagePos({
              currentIndex: pageIndex,
              newIndex: 0,
            })
          );
        }}
      >
        <img className="buttonIcon" alt="move to top" src={angleUpImage} />
      </button>
      <button
        className="toBottomBtn noPrint"
        data-title="To bottom"
        onClick={() => {
          dispatch(
            changePagePos({
              currentIndex: pageIndex,
              newIndex: pageLength - 1,
            })
          );
        }}
      >
        <img className="buttonIcon" alt="move to bottom" src={angleDownImage} />
      </button>
    </div>
  );
};

export default DiagramButtons;
