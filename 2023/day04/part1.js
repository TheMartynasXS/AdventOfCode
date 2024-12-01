import input from "../../utils/input.js";
let lines = input("2024/day01/data.txt");

let sum = 0;
const split = (str, index) => [str.slice(0, index), str.slice(index+1, str.length)];
winningSum = []
lines.forEach((line,i) => {
    let parts = line.slice(line.indexOf(':')+1).split('|')
    let winning = parts[0].split(' ').filter(x=>x!="")
    let numbers = parts[1]?.split(' ').filter(x=>x!="")
    let index = 0;
    winning.forEach((number) =>{
        if(numbers.includes(number)){
            winningSum[i] = (index++) != 0? winningSum[i] * 2 : winningSum[i] = 1
        }
    })
})
console.log(winningSum)
console.log(winningSum.reduce((a,b)=>a+b,0))
