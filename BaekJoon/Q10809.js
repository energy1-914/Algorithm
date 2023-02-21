let input = require('fs').readFileSync('example.txt').toString().trim().split('');
let cnt = Array(26).fill(-1);
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
for (let x of input) {
  if (cnt[alphabet.indexOf(x)] === -1) {
    cnt[alphabet.indexOf(x)] = input.indexOf(x);
  }
}
console.log(...cnt);
