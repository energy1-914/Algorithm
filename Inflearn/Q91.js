// 최대점수 구하기(냅색 알고리즘)
function solution(m, arr) {
  let answer = 0;
  let dy = Array(m + 1).fill(0); // dy[j] = j시간동안 얻을 수 있는 최대 점수
  for (let i = 0; i < arr.length; i++) {
    let score = arr[i][0];
    let time = arr[i][1];
    for (let j = m; j >= time; j--) {
      dy[j] = Math.max(dy[j], dy[j - time] + score);
    }
  }
  answer = dy[m];
  return answer;
}
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
