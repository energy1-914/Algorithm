//피로도
function solution(k, dungeons) {
  let answer = 0;
  let n = dungeons.length;
  let cases = [];
  let tmp = [];
  let ch = Array(n).fill(0);
  function DFS(L, x) {
    if (L === x) cases.push(tmp.slice());
    else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(dungeons[i]);
          DFS(L + 1, x);
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    DFS(0, i);
  }
  for (let x of cases) {
    let cnt = 0;
    let score = k;
    for (let arr of x) {
      if (score >= arr[0]) {
        cnt++;
        score -= arr[1];
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}
