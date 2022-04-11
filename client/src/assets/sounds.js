import f2 from "./sounds/F2.ogg";
import fSharp2 from "./sounds/Fsharp2.ogg";
import g2 from "./sounds/G2.ogg";
import gSharp2 from "./sounds/Gsharp2.ogg";
import a2 from "./sounds/A2.ogg";
import aSharp2 from "./sounds/Asharp2.ogg";
import b2 from "./sounds/B2.ogg";
import c3 from "./sounds/C3.ogg";
import cSharp3 from "./sounds/Csharp3.ogg";
import d3 from "./sounds/D3.ogg";
import dSharp3 from "./sounds/Dsharp3.ogg";
import e3 from "./sounds/E3.ogg";
import f3 from "./sounds/F3.ogg";
import fSharp3 from "./sounds/Fsharp3.ogg";
import g3 from "./sounds/G3.ogg";
import gSharp3 from "./sounds/Gsharp3.ogg";
import a3 from "./sounds/A3.ogg";
import aSharp3 from "./sounds/Asharp3.ogg";
import b3 from "./sounds/B3.ogg";
import c4 from "./sounds/C4.ogg";
import cSharp4 from "./sounds/Csharp4.ogg";
import d4 from "./sounds/D4.ogg";
import dSharp4 from "./sounds/Dsharp4.ogg";
import e4 from "./sounds/E4.ogg";
import f4 from "./sounds/F4.ogg";
import fSharp4 from "./sounds/Fsharp4.ogg";
import g4 from "./sounds/G4.ogg";
import gSharp4 from "./sounds/Gsharp4.ogg";
import a4 from "./sounds/A4.ogg";
import aSharp4 from "./sounds/Asharp4.ogg";
import b4 from "./sounds/B4.ogg";
import c5 from "./sounds/C5.ogg";
import cSharp5 from "./sounds/Csharp5.ogg";
import d5 from "./sounds/D5.ogg";
import dSharp5 from "./sounds/Dsharp5.ogg";
import e5 from "./sounds/E5.ogg";
import f5 from "./sounds/F5.ogg";
import fSharp5 from "./sounds/Fsharp5.ogg";
import g5 from "./sounds/G5.ogg";
import gSharp5 from "./sounds/Gsharp5.ogg";
import a5 from "./sounds/A5.ogg";

const fretboardSoundMap = {
  Fret1: {
    string1: f4,
    string2: c4,
    string3: gSharp3,
    string4: dSharp3,
    string5: aSharp2,
    string6: f2,
  },
  Fret2: {
    string1: fSharp4,
    string2: cSharp4,
    string3: a3,
    string4: e3,
    string5: b2,
    string6: fSharp2,
  },
  Fret3: {
    string1: g4,
    string2: d4,
    string3: aSharp3,
    string4: f3,
    string5: c3,
    string6: g2,
  },
  Fret4: {
    string1: gSharp4,
    string2: dSharp4,
    string3: b3,
    string4: fSharp3,
    string5: cSharp3,
    string6: gSharp2,
  },
  Fret5: {
    string1: a4,
    string2: e4,
    string3: c4,
    string4: g3,
    string5: d3,
    string6: a2,
  },
  Fret6: {
    string1: aSharp4,
    string2: f4,
    string3: cSharp4,
    string4: gSharp3,
    string5: dSharp3,
    string6: aSharp2,
  },
  Fret7: {
    string1: b4,
    string2: fSharp4,
    string3: d4,
    string4: a3,
    string5: e3,
    string6: b2,
  },
  Fret8: {
    string1: c5,
    string2: g4,
    string3: dSharp4,
    string4: aSharp3,
    string5: f3,
    string6: c3,
  },
  Fret9: {
    string1: cSharp5,
    string2: gSharp4,
    string3: e4,
    string4: b3,
    string5: fSharp3,
    string6: cSharp3,
  },
  Fret10: {
    string1: d5,
    string2: a4,
    string3: f4,
    string4: c4,
    string5: g3,
    string6: d3,
  },
  Fret11: {
    string1: dSharp5,
    string2: aSharp4,
    string3: fSharp4,
    string4: cSharp4,
    string5: gSharp3,
    string6: dSharp3,
  },
  Fret12: {
    string1: e5,
    string2: b4,
    string3: g4,
    string4: d4,
    string5: a3,
    string6: e3,
  },
  Fret13: {
    string1: f5,
    string2: c5,
    string3: gSharp4,
    string4: dSharp4,
    string5: aSharp3,
    string6: f3,
  },
  Fret14: {
    string1: fSharp5,
    string2: cSharp5,
    string3: a4,
    string4: e4,
    string5: b3,
    string6: fSharp3,
  },
  Fret15: {
    string1: g5,
    string2: d5,
    string3: aSharp4,
    string4: f4,
    string5: c4,
    string6: g3,
  },
  Fret16: {
    string1: gSharp5,
    string2: dSharp5,
    string3: b4,
    string4: fSharp4,
    string5: cSharp4,
    string6: gSharp3,
  },
  Fret17: {
    string1: a5,
    string2: e5,
    string3: c5,
    string4: g4,
    string5: d4,
    string6: a3,
  },
};

export const playNote = (fretKey, stringKey) => {
  const soundToPlay = new Audio(fretboardSoundMap[fretKey][stringKey]);
  soundToPlay.play();
};


