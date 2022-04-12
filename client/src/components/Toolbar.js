import React, { useState } from "react";
import "../css/Toolbar.css";
import SoundButton from "./SoundButton";
import SaveButton from "./SaveButton";
import LoadButton from "./LoadButton";
import ClearButton from "./ClearButton";
import PrintButton from "./PrintButton";
import NewFretboardButton from "./NewFretboardButton";
import NewChordButton from "./NewChordButton";
import DocumentSelectionModal from "./DocumentSelectionModal";
import { useSelector } from "react-redux";

const Toolbar = () => {
  const [docModalDisplay, setDocModalDisplay] = useState(false);
  const state = useSelector((state) => state.value.user);
  const docs = state ? state.documents : null;

  const handleToggleModal = () => {
    if (docs) {
      docModalDisplay === false
        ? setDocModalDisplay(true)
        : setDocModalDisplay(false);
    } else {
      alert("Log in or sign up to save and load your documents");
    }
  };
  return (
    <div id="Toolbar" className="noPrint">
      <NewFretboardButton />
      <NewChordButton />
      <PrintButton />
      <SaveButton />
      <LoadButton onClick={handleToggleModal} />
      <ClearButton />
      <SoundButton />
      <DocumentSelectionModal
        docs={docs}
        onClose={() => setDocModalDisplay(false)}
        show={docModalDisplay}
      />
    </div>
  );
};

export default Toolbar;
