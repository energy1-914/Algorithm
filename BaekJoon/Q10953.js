// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require("fs").readFileSync('example.txt').toString().split('\n');
for(let i = 1; i < input.length; i++) {
  let a = input[i].split(',');
  console.log(parseInt(a[0]) + parseInt(a[1]))
}