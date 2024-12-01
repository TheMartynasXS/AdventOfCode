let lines = require("../../input.js")(__filename);
for (var i = 0, sum = 0; i < lines.length; i++) {
  digits = lines[i].match(/\d/g) ?? [0];
  sum += parseInt(digits[0] + digits[digits.length - 1]);
}
console.log(sum);
