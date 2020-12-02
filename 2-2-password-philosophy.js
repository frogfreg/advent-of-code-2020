const inputArr = require("./input2.json");

const checkPassword = (passwordString) => {
  const passwordSections = passwordString.split(" ");
  let [policy, letter, password] = passwordSections;
  letter = letter.replace(":", "");
  const policyLower = parseInt(policy.split("-")[0]);
  const policyUpper = parseInt(policy.split("-")[1]);

  return validatePassword(policyLower, policyUpper, letter, password);
};

function validatePassword(lower, upper, policyLetter, password) {
  if (
    password[lower - 1] === policyLetter &&
    password[upper - 1] !== policyLetter
  ) {
    return true;
  }
  if (
    password[upper - 1] === policyLetter &&
    password[lower - 1] !== policyLetter
  ) {
    return true;
  }
  return false;
}

const count = inputArr.reduce((acc, cur) => {
  if (checkPassword(cur)) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);

console.log(count);
