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
const maxId = Math.max(
  ...inputArr.reduce((acc, curr) => {
    acc.push(getId(curr));
    return acc;
  }, [])
);

console.log(`The greatest ID is ${maxId}`);
