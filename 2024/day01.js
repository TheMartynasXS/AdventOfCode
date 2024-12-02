import input from "../utils/input.js";
let lines = input();
let data = { left: [], right: [] };

let result = { part1: 0, part2: 0 };
lines.forEach((line) => {
  let parts = line.split("   ");
  data.left.push(parts[0]);
  data.right.push(parts[1]);
});

result.part2 = data.left.reduce(
  (acc, cV) => acc + cV * data.right.filter((i) => i == cV).length,
  0
);

data.left.sort();
data.right.sort();

for (let i = 0; i < data.left.length; i++) {
  result.part1 += Math.abs(data.left[i] - data.right[i]);
}
console.log(result);
