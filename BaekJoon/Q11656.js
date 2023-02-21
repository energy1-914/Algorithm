let input = require('fs').readFileSync('example.txt').toString().trim().split('');
let n = input.length;
let arr = [];
let answer = [];
for (let i = 0; i < n; i++) {
  arr.push(input.slice());
  input.shift();
}
for (let x of arr) {
  x = x.join('');
  answer.push(x);
}
console.log(answer.sort().join('\n'));
