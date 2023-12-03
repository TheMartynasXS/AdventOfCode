const {input} = require('../../input.js');
let lines = input(__filename)

t1 = performance.now();
for(var i = 0, sum = 0; i < lines.length; i++) {
    digits = lines[i].match(/\d/g)??[0];
    sum += parseInt(digits[0]+digits[digits.length - 1])
}
console.log((performance.now() - t1).toFixed(3) + "ms");
console.log(sum);