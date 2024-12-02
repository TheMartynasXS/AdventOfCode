import input from "../../utils/input.js";
let lines = input("2024/day02/data.txt").map((line) =>
  line.split(" ").map(Number)
);

let safe = lines.filter((row) => test(row, row.length)).length;

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
console.log(safe);
