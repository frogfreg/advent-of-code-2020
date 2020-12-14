const ruleList = require("./input7.json");

function getColorName(string) {
  const colorName = string.match(/^(\w* \w*) bags/i)[1];
  return colorName;
}

function findContainingBags(rules, bagName) {
  const containers = [];
  const regex = new RegExp(`contain.*${bagName}`);
  for (let rule of rules) {
    if (regex.test(rule)) {
      containers.push(getColorName(rule));
    }
  }
  // if (containers.length === 0) {
  //   return null;
  // }
  return containers;
}

function findShinyBags(rules) {
  let containing = [...findContainingBags(rules, "shiny gold")];

  for (const bag of containing) {
    const newContainers = findContainingBags(rules, bag).filter((bag) => {
      return !containing.includes(bag);
    });

    containing = [...containing, ...newContainers];
  }

  // console.log(containing);
  console.log(`The number of bags is ${containing.length}`);
}

const raw = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const inputArr = raw.split("\n").map((rule) => rule.replace("\r", ""));

// console.log(findContainingBags(inputArr,"shiny gold"));
findShinyBags(inputArr);
findShinyBags(ruleList);

