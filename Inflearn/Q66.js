// 재귀함수를 이용한 이진수 출력
function solution(n) {
  let answer = [];
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(Math.floor(L / 2));
      answer.push(L % 2);
    }
  }
  DFS(n);
  return answer.join("");
}

console.log(solution(11)); // 1011
