let input = require('fs').readFileSync('example.txt').toString();
let answer = '';
let n = parseInt(input);
let arr = Array(n).fill('*');
for (let i = 0; i < n; i++) {
  answer += arr.join('') + '\n';
  arr[i] = ' ';
}
console.log(answer)