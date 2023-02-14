let input = require('fs').readFileSync('example.txt').toString().split('\n');
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let arr = input[1].split(' ');

for (let i = 0; i < arr.length; i++) {
  min = Math.min(min, parseInt(arr[i]));
  max = Math.max(max, parseInt(arr[i]));
}
console.log(min, max);