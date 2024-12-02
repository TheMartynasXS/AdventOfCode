import input from "../utils/input.js";
let lines = input().map((line) => line.split(" ").map(Number));
let result = { part1: 0, part2: 0 };
result.part1 = lines.filter((row) => test(row, row.length)).length;
result.part2 = lines.filter((row) => {
  if (test(row, row.length)) return true;
  for (let i = 0; i < row.length; i++) {
    if (test(row.slice(0, i).concat(row.slice(i + 1)), row.length - 1))
      return true;
  }
}).length;

function test(row, comparator) {
  return (
    row.reduce((safe, value, index) => {
      let size = Math.abs(value - row[index - 1]);
      return (
        safe +
        (index == 0 ||
          (row[index - 1] < value == row[0] < row[1] && size >= 1 && size <= 3))
      );
    }, 0) >= comparator
  );
}
console.log(result);
