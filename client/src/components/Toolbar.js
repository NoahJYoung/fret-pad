import React from "react";
import "../css/Toolbar.css";
import SoundButton from "./SoundButton";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";
import ClearButton from "./ClearButton";
import PrintButton from "./PrintButton";
import NewFretboardButton from "./NewFretboardButton";
import NewChordButton from "./NewChordButton";

const Toolbar = () => {
  return (
    <div id="Toolbar" className="noPrint">
      <NewFretboardButton />
      <NewChordButton />
      <PrintButton />
      <SaveButton />
      <LoadButton />
      <ClearButton />
      <SoundButton />
    </div>
  );
};

export default Toolbar;
