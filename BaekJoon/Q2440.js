let input = require('fs').readFileSync('example.txt').toString();
let n = parseInt(input);
let arr = Array(n).fill('*');
let answer = '';
for (let i = 0; i < n; i++) {
  answer += arr.join('') + '\n';
  arr.pop();
}
console.log(answer);