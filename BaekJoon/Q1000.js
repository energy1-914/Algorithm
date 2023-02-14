// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let input = require("fs").readFileSync("example.txt").toString().split(' ');
let answer = 0;
for (let i = 0; i < input.length; i++) {
  answer += parseInt(input[i])
}
console.log(answer);
