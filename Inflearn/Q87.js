//dp : 계단오르기
function solution(n) {
  let answer;
  let dy = Array(n + 1).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}
console.log(solution(7));