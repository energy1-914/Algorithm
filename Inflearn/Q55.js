// 회의실 배정
function solution(times) {
  let answer = 0;
  let endTime = 0;
  times.sort((a,b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let x of times) {
    if (endTime <= x[0]) {
      answer++;
      endTime = x[1];
    }
  }

  return answer;
}
console.log(solution([[1, 2], [2, 6], [1, 3], [3, 4], [4, 5], [5, 7]])) // 4
// console.log(solution([[1, 3], [2, 3], [3, 5], [3, 4], [4, 5], [5, 7]])) // 3
// console.log(solution([[1, 3], [2, 3], [3, 3]])) // 2
