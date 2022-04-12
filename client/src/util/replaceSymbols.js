const replaceSymbols = (name) => {
  const nameArr = name.split("");
  nameArr.forEach((i) => {
    if (i === "#") {
      nameArr[nameArr.indexOf(i)] = "♯";
    } else if (i === "b") {
      nameArr[nameArr.indexOf(i)] = "♭";
    } else if (i === "*") {
      nameArr[nameArr.indexOf(i)] = "°";
    } else if (i === "%") {
      nameArr[nameArr.indexOf(i)] = "ø";
    } else if (i === "=") {
      nameArr[nameArr.indexOf(i)] = "♮";
    }
  });
  return nameArr.join("");
};

export default replaceSymbols;
