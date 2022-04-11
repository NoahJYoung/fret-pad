import React from "react";
import { useSelector } from "react-redux";
import Toolbar from "./components/Toolbar";
import "./css/App.css";
import DiagramGrid from "./components/DiagramGrid";
import PageTitle from "./components/PageTitle";
import Banner from "./components/Banner";

const App = () => {
  const state = useSelector((state) => state.value.title);
  return (
    <div id="App">
      <Banner />
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
