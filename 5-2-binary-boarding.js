const inputArr = require("./input5.json");

function getId(seatString) {
  const rows = seatString.slice(0, 7);
  const columns = seatString.slice(7);
  const rowNumber = getNumberFromCode(rows, 0, 127, "F");
  const columnNumber = getNumberFromCode(columns, 0, 7, "L");
  return rowNumber * 8 + columnNumber;
}
function getNumberFromCode(string, lower, upper, test) {
  for (const letter of string) {
    if (letter === test) {
      upper = Math.floor((lower + upper) / 2);
    } else {
      lower = Math.ceil((lower + upper) / 2);
    }
  }
  if (string[string.length - 1] === test) {
    return lower;
  } else {
    return upper;
  }
}

function findMissing(array) {
  let missing;
  const idsArray = array.map((code) => {
    return getId(code);
  });
  idsArray.sort((a, b) => {
    return a - b;
  });
  for (let [i, id] of idsArray.entries()) {
    if (id + 1 !== idsArray[i + 1]) {
      missing = id + 1;
      break;
    }
  }
  return missing;
}

console.log(`The missing pass ID is ${findMissing(inputArr)}`);
