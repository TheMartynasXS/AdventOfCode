const {input} = require('../../input.js');
let lines = input(__filename)
let sum = 0;
let numbers = []
let split = (str, index) => [str.slice(0, index), str.slice(index+1, str.length)];
let getNums = (adj,str,index) => {
    if(adj && adj.length == 2){
        let numbers = split(str,index)
        let first = parseInt(numbers[0].split(".").pop())
        let second = parseInt(numbers[1].split(".").shift())
        return [first,second].filter(x=>!isNaN(x));
    }
    if(adj && adj.length == 3){
        let first = parseInt(str.slice(index-1,index+2))
        return [first]
    }
    splitIndex = str[index] == "."|| str[index] == "*" ? index : index + str.slice(index-1,index+2).indexOf(".") - 1
    if(adj && adj.length == 1){
        let numbers = split(str,splitIndex)
        let first = parseInt(numbers[0].split(".").pop())
        let second = parseInt(numbers[1].split(".").shift())
        if(!isNaN(first) && !isNaN(second)) return (splitIndex < index ? [second] : [first])
        return [first,second].filter(x=>!isNaN(x));
    }
    return []
}
for(let i = 0; i < lines.length; i++){
    
    while((j = lines[i].indexOf("*"))!=-1){
        let adj = {
            up : lines?.[i-1]?.slice(j-1,j+2).match(/\d+/g),
            inline : lines[i].slice(j-1,j+2).match(/\d+/g),
            down : lines?.[i+1]?.slice(j-1,j+2).match(/\d+/g)
        }
        let numbers = []
        numbers.push(...getNums(adj.inline,lines[i],j))
        if (numbers.length < 2){
            numbers.push(...getNums(adj.up,lines[i-1],j))
        }
        if (numbers.length < 2){
            numbers.push(...getNums(adj.down,lines[i+1],j))
        }
        if(numbers.length == 2){
            sum += numbers.reduce((a,b)=>a*b,1)
        }
        lines[i] = lines[i].replace(/\*/, ".")
    }
}
console.log(sum)
