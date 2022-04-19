import React from "react";
import { useSelector } from "react-redux";
import "../../css/LoadingSpinner.css";

const LoadingSpinner = () => {
  const state = useSelector((state) => state);
  if (state.loading) {
    return (
      <div className="spinner-container">
        <div className="loading-spinner" />
      </div>
    );
  } else {
    return null;
  }
};

export default LoadingSpinner;
