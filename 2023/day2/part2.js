const {input} = require('../../input.js');
let lines = input(__filename)
t1 = performance.now();
sum = 0;
for(let i = 0; i < lines.length; i++){
    games = lines[i].slice(lines[i].indexOf(":")+2).split("; ")
    let t = true;
    c=[0,0,0]
    for(let j = 0; j < games.length; j++){
        temp = games[j].split(", ");
        c[0] = Math.max(c[0],temp.find(n=>n.endsWith("d"))?.split(" ")[0]??0)
        c[1] = Math.max(c[1],temp.find(n=>n.endsWith("n"))?.split(" ")[0]??0)
        c[2] = Math.max(c[2],temp.find(n=>n.endsWith("e"))?.split(" ")[0]??0)
    }
    if (t) sum += c.reduce((a,b)=>a*b,1);
}
console.log((performance.now() - t1).toFixed(3) + "ms");
console.log(sum)