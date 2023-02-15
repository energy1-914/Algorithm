let input = require("fs").readFileSync("example.txt").toString();
let n = parseInt(input);
let dp = Array(n + 1).fill(0);
let answer;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}
answer = dp[n];
console.log(answer);
