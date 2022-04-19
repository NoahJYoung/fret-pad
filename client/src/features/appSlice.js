import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user: null,
  title: "",
  diagrams: [],
  documentId: null,
  settings: { sound: true },
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value.user = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    updateDocs: (state, action) => {
      state.value.user.documents = action.payload;
      state.value.documentId =
        state.value.user.documents[state.value.user.documents.length - 1]._id;
    },
    editTitle: (state, action) => {
      state.value.title = action.payload;
    },
    updateTitle: (state) => {
      state.value.title = "";
    },
    addDiagram: (state, action) => {
      state.value.diagrams = [...state.value.diagrams, action.payload];
    },
    removeDiagram: (state, action) => {
      state.value.diagrams = state.value.diagrams.filter(
        (i) => state.value.diagrams.indexOf(i) !== action.payload.deleteIndex
      );
    },
    newDocument: (state) => {
      state.value.diagrams = [];
      state.value.title = "";
      state.value.documentId = null;
    },
    load: (state, action) => {
      state.value.title = action.payload.title;
      state.value.diagrams = action.payload.diagrams;
      state.value.documentId = action.payload.id;
    },

    changePagePos: (state, action) => {
      let stateCopy = JSON.stringify(state.value.diagrams);
      let newArr = JSON.parse(stateCopy);
      let notesToMove = newArr.splice(action.payload.currentIndex, 1);
      newArr.splice(action.payload.newIndex, 0, notesToMove[0]);
      state.value.diagrams = newArr;
    },
    setFretMarker: (state, action) => {
      state.value.diagrams[action.payload.pageIndex].fretMarker =
        action.payload.newFretMarker;
    },
    updateFretMarker: (state, action) => {
      state.value.diagrams[action.payload.pageIndex].fretMarker = "";
    },
    setName: (state, action) => {
      state.value.diagrams[action.payload.pageIndex].name =
        action.payload.newName;
    },
    updateName: (state, action) => {
      state.value.diagrams[action.payload.pageIndex].name = "";
    },
    toggleNote: (state, action) => {
      state.value.diagrams[action.payload.pageIndex].frets[action.payload.fret][
        action.payload.string
      ] = action.payload.newState;
    },
    toggleOpenClose: (state, action) => {
      state.value.diagrams[action.payload.pageIndex].openClose[
        action.payload.stringIndex
      ] = action.payload.newState;
    },
    toggleSound: (state) => {
      if (state.value.settings.sound) {
        state.value.settings.sound = false;
      } else {
        state.value.settings.sound = true;
      }
    },
  },
});

export const {
  login,
  logout,
  setLoading,
  updateDocs,
  editTitle,
  updateTitle,
  addDiagram,
  removeDiagram,
  newDocument,
  load,
  toggle,
  changePagePos,
  setFretMarker,
  updateFretMarker,
  setName,
  updateName,
  toggleNote,
  toggleOpenClose,
  toggleSound,
} = appSlice.actions;

export default appSlice.reducer;
