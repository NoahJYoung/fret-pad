const createDiagramStateObject = (
  fretName,
  numFrets,
  stringName,
  numStrings,
  value
) => {
  const diagramObj = {};
  const fretObj = {};
  [...Array(numStrings).keys()].forEach(
    (i) => (fretObj[stringName + (i + 1)] = value)
  );
  [...Array(numFrets).keys()].forEach(
    (i) => (diagramObj[fretName + (i + 1)] = { ...fretObj })
  );
  return diagramObj;
};

export const fretsFretboard = createDiagramStateObject(
  "Fret",
  17,
  "string",
  6,
  "hide"
);

export const fretsChordBox = createDiagramStateObject(
  "chordFret",
  5,
  "chordString",
  6,
  0
);
