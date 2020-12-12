const inputArr = require("./input6.json");

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
