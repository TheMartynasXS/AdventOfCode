import input from "../../utils/input.js";
let lines = input("2024/day01/data.txt");
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
  result += Math.abs(a[i] - b[i]);
}
console.log(result);
