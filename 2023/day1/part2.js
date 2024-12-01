let lines = require("../../input.js")(__filename);
sum = 0;
const chars = {'one':1,'two':2,'three':3,'four':4,'five':5,'six':6,'seven':7,'eight':8,'nine':9}

for(let i = 0; i < lines.length-1; i++) {
    while((Str = lines[i].match(/(?:one|two|three|four|five|six|seven|eight|nine)/)) != null){
        index = lines[i].indexOf(Str[0])
        a = lines[i].slice(0,index)
        b = lines[i].slice(index+1)
        lines[i] = a + chars[Str[0]] + b
    }
    lines[i] = lines[i]?.replaceAll(/\D/g, "")
    sum += parseInt(lines[i][0]+lines[i][lines[i].length - 1])
}
console.log(sum);