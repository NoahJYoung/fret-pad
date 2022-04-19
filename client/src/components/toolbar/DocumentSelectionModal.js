import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { load, updateDocs, setLoading } from "../../features/appSlice";
import { trashImage } from "../../assets/images";
import "../../css/DocumentSelectionModal.css";

const DocumentSelectionModal = (props) => {
  const state = useSelector((state) => state.value);
  let docs = state.user ? state.user.documents : [];
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (id === state.documentId) {
      alert(
        "Can't delete a document you're currently editing. To delete this document, open another document first."
      );
    } else {
      dispatch(setLoading(true));
      axios
        .delete("/documents", {
          params: { documentId: id, username: state.user.username },
        })
        .then((res) => {
          dispatch(setLoading(false));
          dispatch(updateDocs(res.data.documents));
        });
    }
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="documentSelectionModal">
      <div className="innerDocModal">
        <div className="listContainer">
          <ul className="docList">
            {docs.map((doc, i) => (
              <li
                key={doc._id}
                className={i % 2 === 0 ? "lightBackground" : "darkBackground"}
              >
                <p>{doc.title}</p>
                <div className="buttonDiv">
                  <button
                    onClick={() => {
                      dispatch(
                        load({
                          title: doc.title,
                          diagrams: doc.diagrams,
                          id: doc._id,
                        })
                      );
                      props.onClose();
                    }}
                  >
                    Load
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(doc._id);
                    }}
                    className="docDeleteBtn"
                  >
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
