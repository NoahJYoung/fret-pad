const replaceSymbols = (name) => {
  const nameArr = name.split("");
  nameArr.map((i) => {
    if (i === "#") {
      nameArr[nameArr.indexOf(i)] = "♯";
    } else if (i === "b") {
      nameArr[nameArr.indexOf(i)] = "♭";
    } else if (i === "*") {
      nameArr[nameArr.indexOf(i)] = "°";
    } else if (i === '%') {
      nameArr[nameArr.indexOf(i)] = "ø"
    }
  });
  return nameArr.join("");
};

export default replaceSymbols;