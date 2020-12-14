const inputArr = require("./input6.json");

function getGroupCount(groupString) {
  const letterSet = new Set([...groupString.replace(/\n/gi, "")]);
  const uniqueLetterArr = [...letterSet];
  const peopleStrings = groupString.split("\n");
  let count = 0;

  letter: for (const letter of uniqueLetterArr) {
    for (const personString of peopleStrings) {
      if (!personString.includes(letter)) {
        continue letter;
      }
    }
    count++;
  }
  return count;
}

const totalCount = inputArr.reduce((acc, cur) => {
  return acc + getGroupCount(cur);
}, 0);

console.log(totalCount);
