const unprocessedInput = require("./input6.json");

const inputArr = unprocessedInput.map((group) => {
  return group.replace(/\n/gi, "");
});

function getGroupCount(groupString) {
  const groupArr = [...groupString];
  const uniqueSet = new Set(groupArr);
  const uniqueArr = [...uniqueSet];

  return uniqueArr.length;
}

const totalGroupCount = inputArr.reduce((acc, cur) => {
  return acc + getGroupCount(cur);
}, 0);

console.log(totalGroupCount);
