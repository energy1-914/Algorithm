// n+1 길이의 배열 dp를 만든다
// 피보나치 수열의 규칙은 dp[n+2 = (dp[n + 1] + dp[n]) % 1234567 이다
// dp를 통해 배열의 값을 n까지 채워준다
// dp(n) 값을 반환한다.
function solution(n) {
  let dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 0; i < n - 1; i++) {
    dp[i + 2] = (dp[i + 1] + dp[i]) % 1234567;
  }
  return dp[n];
}
