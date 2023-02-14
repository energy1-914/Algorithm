let input = require('fs').readFileSync('example.txt').toString().split('\n');
let nums = input[1].split('');

let sum = nums.reduce((a, b) => a + parseInt(b), 0)
console.log(sum)
// for (let x of nums) {
//   x = parseInt(x)
// }
// console.log(nums)
