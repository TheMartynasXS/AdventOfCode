let lines = require("../../input.js")(__filename);
let sum = 0;
let numbers = [];
xlines = [...lines];
for (let i = 0; i < xlines.length; i++) {
  xlines[i] = xlines[i].replaceAll(/\d/g, ".");
}
lines.forEach((line, i) => {
  if (line == "") return;
  let matches = lines[i].match(/\d+/g);
  numbers[i] = {};
  for (let index = 0; index < matches?.length; index++) {
    let j = lines[i].indexOf(matches[index]);
    numbers[i][j] = matches[index];
    lines[i] = lines[i].replace(
      matches[index],
      ".".repeat(matches[index].length)
    );
    isPart = false;
    if (
      (xlines[i]?.[j - 1] ?? ".") != "." ||
      (xlines[i]?.[j + numbers[i][j]?.length] ?? ".") != "."
    ) {
      isPart = true;
    }
    for (let x = j - 1; x < j + numbers[i]?.[j]?.length + 1 && !isPart; x++) {
      if (
        (xlines[i - 1]?.[x] ?? ".") != "." ||
        (xlines[i + 1]?.[x] ?? ".") != "."
      ) {
        isPart = true;
        break;
      }
    }
    if (isPart) {
      sum += parseInt(numbers[i][j]);
    }
  }
});
console.log(sum);
