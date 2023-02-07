// 팩토리얼
function solution(n) {
  let answer = 1;
  function DFS(L) {
    if (L === 0) return;
    else {
      answer = answer * L;
      DFS(L - 1);
    }
  }
  DFS(n);
  return answer;
}
console.log(solution(5));
