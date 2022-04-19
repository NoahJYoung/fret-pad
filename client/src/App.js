import React from "react";
import { useSelector } from "react-redux";
import Toolbar from "./components/toolbar/Toolbar";
import "./css/App.css";
import DiagramGrid from "./components/diagrams/shared/DiagramGrid";
import PageTitle from "./components/diagrams/shared/PageTitle";
import Banner from "./components/header/Banner";
import LoadingSpinner from "./components/toolbar/LoadingSpinner";

const App = () => {
  const state = useSelector((state) => state.value.title);
  return (
    <div id="App">
      <Banner />
      <LoadingSpinner />
      <div id="mainCont">
        <PageTitle title={state} />
        <DiagramGrid />
      </div>
      <div className="toolbarCont">
        <Toolbar />
      </div>
    </div>
  );
};

export default App;
