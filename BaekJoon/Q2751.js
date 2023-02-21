let [n, ...input] = require('fs').readFileSync('example.txt').toString().trim().split('\n');
n = parseInt(n);
let nums = input.map(x => +x);
nums.sort((a,b) => a - b);
let answer = '';
for (let i = 0; i < n; i++) {
  answer += nums[i] + '\n';
}
console.log(answer)