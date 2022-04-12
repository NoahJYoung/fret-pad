import React from "react";
import { useDispatch } from "react-redux";
import { load } from "../features/appSlice";
import { trashImage } from "../assets/images";
import "../css/DocumentSelectionModal.css";

const DocumentSelectionModal = (props) => {
  const dispatch = useDispatch();
  if (!props.show) {
    return null;
  }
  return (
    <div className="documentSelectionModal">
      <div className="innerDocModal">
        <div className="listContainer">
          <ul className="docList">
            {props.docs.map((doc, i) => (
              <li
                key={doc.id}
                className={i % 2 === 0 ? "lightBackground" : "darkBackground"}
              >
                <p>{doc.title}</p>
                <div className="buttonDiv">
                  <button
                    onClick={() => {
                      dispatch(
                        load({ title: doc.title, diagrams: doc.diagrams })
                      );
                      props.onClose();
                    }}
                  >
                    Load
                  </button>
                  <button className="docDeleteBtn">
                    <img
                      className="docDeleteImg"
                      alt="delete button"
                      src={trashImage}
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="docModalClose"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentSelectionModal;
