// 수열 추측하기
function solution(n, f) {
  let answer;
  let flag = 0;
  let dy = Array.from(Array(10), () => Array(10).fill(0));
  let ch = Array(n + 1).fill(0);
  let b = Array(n).fill(0);
  let p = Array(n).fill(0);

  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return combi(n - 1, r - 1) + combi(n - 1, r);
  }

  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === f) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
}
console.log(solution(4, 16));
