let lines = require("../../input.js")(__filename);

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
console.log(result);