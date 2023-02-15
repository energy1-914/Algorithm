let input = require("fs").readFileSync("example.txt").toString().split("\n").map(x => Number(x));

function solution(x) {
  let nums = [1, 2, 3];
  let dp = Array(12).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= x; i++) {
    for (let j = 0; j < 3; j++) {
      dp[i] += dp[i - nums[j]];
    }
  }
  console.log(dp[x]);
}

for (let i = 1; i < input.length; i++) {
  solution(input[i]);
}





let input2 = require("fs").readFileSync("example.txt").toString().split("\n").map(x => Number(x));

let dp = Array(12).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for(let i = 1; i <= input2[0]; i++) {
  for (let j = 4; j <= input2[i]; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  console.log(dp[input2[i]])
}