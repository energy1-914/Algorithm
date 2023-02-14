let input = require('fs').readFileSync('example.txt').toString();
let answer = '';
for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}
console.log(answer)