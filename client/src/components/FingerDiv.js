import React from "react";
import "../css/FingerDiv.css";

const FingerDiv = ({ fingerDisplay }) => {
  if (fingerDisplay === 0) {
    return null;
  } else {
    return <div className="fingerDiv">{fingerDisplay}</div>;
  }
};

export default FingerDiv;
