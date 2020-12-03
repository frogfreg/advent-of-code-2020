const inputArr = require("./input3.json");

// const rawArr = `..##.......
// #...#...#..
// .#....#..#.
// ..#.#...#.#
// .#...##..#.
// ..#.##.....
// .#.#.#....#
// .#........#
// #.##...#...
// #...##....#
// .#..#...#.#`.split("\n");

function countTrees(input, incX, incY) {
  const longInput = input.map((row) => {
    return row.repeat(Math.ceil(input.length / (input[0].length / incX)));
  });

  let counter = 0;
  let i = 0;
  let j = 0;

  while (longInput[i]) {
    if (longInput[i][j] === "#") {
      counter++;
    }
    i += incY;
    j += incX;
  }
  return counter;
}

const values = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

const result = values.reduce((acc, cur) => {
  console.log(cur);
  return acc * countTrees(inputArr, cur[0], cur[1]);
}, 1);

console.log(result);
