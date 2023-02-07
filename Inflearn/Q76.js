// // 팩토리얼
// function solution(n) {
//   let answer = 1;
//   function DFS(L) {
//     if (L === 0) return;
//     else {
//       answer = answer * L;
//       DFS(L - 1);
//     }
//   }
//   DFS(n);
//   return answer;
// }
// console.log(solution(5));

function sol2(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else {
      return n * DFS(n - 1);
    }
  }
  answer = DFS(n);
  return answer;
}
console.log(sol2(5));
