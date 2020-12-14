const inputArr = require("./input2.json");

function checkPassword(passwordString) {
  const passwordSections = passwordString.split(" ");
  let [policy, letter, password] = passwordSections;
  letter = letter.replace(":", "");
  const policyLower = parseInt(policy.split("-")[0]);
  const policyUpper = parseInt(policy.split("-")[1]);
  if (
    countLetters(letter, password) >= policyLower &&
    countLetters(letter, password) <= policyUpper
  ) {
    return true;
  } else {
    return false;
  }
}

function countLetters(policyLetter, string) {
  let counter = 0;
  for (const letter of string) {
    if (letter === policyLetter) {
      counter += 1;
    }
  }
  return counter;
}

const count = inputArr.reduce((acc, cur) => {
  if (checkPassword(cur)) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

console.log(count);
