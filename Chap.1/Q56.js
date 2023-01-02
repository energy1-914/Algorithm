// 결혼식
function solution(times) {
  let timeLine = [];
  let answer = Number.MIN_SAFE_INTEGER;
  let count = 0;

  for (let x of times) {
    timeLine.push([x[0], 1]);
    timeLine.push([x[1], 2]);
  };

  timeLine.sort((a,b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });

  for (let x of timeLine) {
    if (x[1] === 1) count++;
    else count--;
    answer = Math.max(answer, count);
  };

  return  answer;
}

console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 16]])) // 3
