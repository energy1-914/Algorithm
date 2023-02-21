let input = require('fs').readFileSync('example.txt').toString().split('');
let answer = [];
for (let x of input) {
  if (x === ' ') {
    answer.push(' ');
    continue;
  }
  let alphabet = x.split('');
  for (let w of alphabet) {
    let num = w.charCodeAt();
    if (num >= 65 && num <= 90) {
      num += 13;
      if (num > 90) {
        num -= 26;
      }
    }
    if (num >= 97 && num <= 122) {
      num += 13;
      if (num > 122) {
        num -= 26;
      }
    }
    answer.push(String.fromCharCode(num));
  }
}
console.log(answer.join(''));