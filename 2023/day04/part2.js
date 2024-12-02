import input from "../utils/input.js";
let lines = input();

winningSum = [];
let tickets = new Array(lines.length - 1).fill(1);
lines.forEach((line, i) => {
  let parts = line.slice(line.indexOf(":") + 1).split("|");
  let winning = parts[0].split(" ").filter((x) => x != "");
  let numbers = parts[1]?.split(" ").filter((x) => x != "");
  let orgWin = [];
  for (let j = 0; j < tickets[i]; j++) {
    if (j == 0) {
      winning
        .filter((x) => numbers.includes(x))
        .forEach((x, inner) => {
          let index = i + inner + 2;
          if (index <= tickets.length) {
            orgWin.push(index);
          }
        });
    }
    orgWin.forEach((x) => tickets[--x]++);
  }
});
console.log(tickets.reduce((a, b) => a + b, 0));
