let input = require('fs').readFileSync('example.txt').toString();
let answer = '';
for (let i = 1; i <= input; i++) {
  let arr = Array(i).fill('*');
  answer += arr.join('') + '\n';
}
console.log(answer);