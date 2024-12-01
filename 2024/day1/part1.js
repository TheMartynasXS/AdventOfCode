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

a.sort();
b.sort();
let result = 0;
for (let i = 0; i < a.length; i++) {
  a[i] > b[i] ? (result += a[i] - b[i]) : (result += b[i] - a[i]);
}
t2 = performance.now();
console.log((t2 - t1).toFixed(3) + "ms");
console.log(result);
