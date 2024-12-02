import input from "../../utils/input.js";
let lines = input("2024/day02/data.txt").map((line) =>
  line.split(" ").map(Number)
);

let safe = lines.filter((row) => test(row)).length;

function test(row) {
  let increasing = row[0] < row[1] ? true : false;
  return row.reduce((safe, value, index) => {
    let size = Math.abs(value - row[index - 1]);
    return (
      safe &&
      (index == 0 ||
        (row[index - 1] < value == increasing && size >= 1 && size <= 3))
    );
  }, true);
}
console.log(safe);
