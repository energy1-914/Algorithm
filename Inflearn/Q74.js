//최대점수 구하기

function solution(m, point, time) {
  let answer = Number.MIN_SAFE_INTEGER;
  let length = point.length;

  function DFS(L, score, totalTime) {
    if (totalTime > m) return;
    if (L === length) {
      answer = Math.max(answer, score);
    } else {
      DFS(L + 1, score + point[L], totalTime + time[L]);
      DFS(L + 1, score, totalTime);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let point = [10, 25, 15, 6, 7];
let time = [5, 12, 8, 3, 4];
console.log(solution(20, point, time));
