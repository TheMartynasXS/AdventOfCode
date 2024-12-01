
let lines = require("../../input.js")(__filename);
t1 = performance.now();
let control = [12,13,14]
sum = 0;
for(let i = 0; i < lines.length; i++){
    games = lines[i].slice(lines[i].indexOf(":")+2).split("; ")
    let t = true;
    for(let j = 0; j < games.length; j++){
        temp = games[j].split(", ");
        c = [
            temp.find(n=>n.endsWith("d"))?.split(" ")[0]<=control[0],
            temp.find(n=>n.endsWith("n"))?.split(" ")[0]<=control[1],
            temp.find(n=>n.endsWith("e"))?.split(" ")[0]<=control[2]
        ]
        if (c[0]+c[1]+c[2] < temp.length) {
            t = false;
            break
        }
    }
    if (t) sum += i+1;
}
console.log((performance.now() - t1).toFixed(3) + "ms");
console.log(sum)
