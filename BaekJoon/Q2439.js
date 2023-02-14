let input = require('fs').readFileSync('example.txt').toString();
let answer = '';
let n = parseInt(input);
let arr = Array(n).fill(' ');

for (let i = n - 1; i >= 0; i--) {
  arr[i] = '*';
  answer += arr.join('') + '\n';
}
console.log(answer)