const inputArr = require("./input3.json");

const longInputArr = inputArr.map((row) => {
  return row.repeat(34);
});

function countTrees(input) {
  let counter = 0;
  let i = 0;
  let j = 0;
  while (input[i]) {
    if (input[i][j] === "#") {
      counter++;
    }
    i += 1;
    j += 3;
  }
  return counter;
}

console.log(countTrees(longInputArr));
