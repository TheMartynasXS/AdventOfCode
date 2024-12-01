let lines = require("../../input.js").input(__filename, false);
let data = { left: [], right: [] };

lines.forEach((line) => {
  parts = line.split("   ");
  data.left.push(parts[0]);
  data.right.push(parts[1]);
});

let result = data.left.reduce(
  (acc, cV) => acc + cV * data.right.filter((i) => i == cV).length,
  0
);
console.log(result);
