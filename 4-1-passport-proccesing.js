const inputArr = require("./input4.json");

const passport = inputArr[0].split(" ");

const key = passport[0].split(":");

const [keyName, value] = key;

const obj = {};
obj[keyName] = value;

console.log(obj);

function objectize(string) {
  const keysArr = string.split(" ");
    
}
