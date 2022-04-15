import React from "react";
import { useDispatch } from "react-redux";
import { editTitle, updateTitle } from "../../../features/appSlice";
import replaceSymbols from "../../../util/replaceSymbols";
import "../../../css/PageTitle.css";

const PageTitle = ({ title }) => {
  const dispatch = useDispatch();
  let tempTitle = title;

  return title !== "" ? (
    <div className="titleContainer">
      <h1
        title="Edit Title"
        onClick={() => dispatch(updateTitle())}
        className="pageTitle"
      >
        {title}
      </h1>
    </div>
  ) : (
    <div className="titleContainer">
      <input
        onChange={(e) => (tempTitle = e.target.value)}
        type="text"
        className="pageTitleInput"
        placeholder="Title"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            e.target.blur();
          }
        }}
        onBlur={() => dispatch(editTitle(replaceSymbols(tempTitle)))}
      />
    </div>
  );
};

export default PageTitle;
