let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
let arr = [];
for (let i = 1; i < input.length; i++) {
  let a = input[i].split(' ');
  for (let n of a) {
    arr.push(parseInt(n))
  }
}
console.log(arr.sort((a, b) => a - b).join(' '));
