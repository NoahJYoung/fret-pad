import React, { useState } from "react";
import "../../css/Toolbar.css";
import SoundButton from "./SoundButton";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";
import NewDocButton from "./NewDocButton";
import PrintButton from "./PrintButton";
import NewFretboardButton from "./NewFretboardButton";
import NewChordButton from "./NewChordButton";
import DocumentSelectionModal from "./DocumentSelectionModal";
import { useSelector } from "react-redux";

const Toolbar = () => {
  const [docModalDisplay, setDocModalDisplay] = useState(false);
  const state = useSelector((state) => state.value.user);

  const handleToggleModal = () => {
    if (state) {
      docModalDisplay === false
        ? setDocModalDisplay(true)
        : setDocModalDisplay(false);
    } else {
      alert("Log in or make a free account to save and load your documents.");
    }
  };
  return (
    <div id="Toolbar" className="noPrint">
      <NewFretboardButton />
      <NewChordButton />
      <PrintButton />
      <SaveButton />
      <LoadButton onClick={handleToggleModal} />
      <NewDocButton />
      <SoundButton />
      <DocumentSelectionModal
        onClose={() => setDocModalDisplay(false)}
        show={docModalDisplay}
      />
    </div>
  );
};

export default Toolbar;
