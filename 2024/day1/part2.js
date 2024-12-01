const { input } = require("../../input.js");
let lines = input(__filename, false);
t1 = performance.now();
let a = [];
let b = [];
lines.forEach((line) => {
  let l = line.split("   ");
  a.push(l[0]);
  b.push(l[1]);
});
let result = a.reduce(
  (acc, value) => acc + value * b.filter((item) => item == value).length,
  0
);
t2 = performance.now();
console.log((t2 - t1).toFixed(3) + "ms");
console.log(result);
