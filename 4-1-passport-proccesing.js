const inputArr = require("./input4.json");

const validatePassport = (string) => {
  const checkValues = ["byr:", "iyr:", "eyr:", "hgt:", "hcl:", "ecl:", "pid:"];
  for (let value of checkValues) {
    if (!string.includes(value)) {
      return false;
    }
  }
  return true;
};

const result = inputArr.reduce((acc, cur) => {
  if (validatePassport(cur)) {
    return acc + 1;
  } else {
    return acc;
  }
}, 0);
console.log(result);
