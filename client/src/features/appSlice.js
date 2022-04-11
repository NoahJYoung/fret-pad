import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  title: "",
  diagrams: [],
  settings: { sound: true },
};
let savedPage = [];

export const appSlice = createSlice({
  name: "app",
  initialState: { value: initialStateValue },
  reducers: {
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
    clearDiagrams: (state) => {
      state.value.diagrams = [];
    },
    load: (state) => {
      state.value = JSON.parse(savedPage);
    },
    save: (state) => {
      savedPage = JSON.stringify(state.value);
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
    }
  },
});

export const {
  editTitle,
  updateTitle,
  addDiagram,
  removeDiagram,
  clearDiagrams,
  load,
  save,
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
