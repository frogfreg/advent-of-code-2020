const ruleList = require("./input7.json");

function findShinyBags(rules) {
  const containers = [];
  for (let [index, rule] of rules.entries()) {
    if (/contain.*shiny gold/gi.test(rule)) {
      containers.push(rule);
    }
  }

  console.log(containers);
}

findShinyBags(ruleList);
