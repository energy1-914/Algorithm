let input = require('fs').readFileSync('example.txt').toString();
let n = parseInt(input);
let dp = Array(n + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007; 
}
console.log(dp[n])